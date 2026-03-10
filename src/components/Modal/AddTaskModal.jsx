import { CrossIcon } from "lucide-react";
import Button from "../Button/Button";
import { useState } from "react";

function AddTaskModal({ onClose, onAddTask }) {
  const [addTask, setAddTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState({});

  // Function
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!addTask.trim()) {
      newErrors.addTask = "Task title is required";
    }

    if (!dueDate) {
      newErrors.dueDate = "Please select a due date";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const taskData = {
      title: addTask,
      priority,
      dueDate,
      status: "Pending",
    };

    console.log("Task Added:", taskData);

    alert("✅ Task Added!");

    onAddTask(taskData);
    onClose();
  };

  return (
    <>
      {/* overlay */}
      <div
        className="fixed inset-0 bg-cyan-800/40 flex items-center justify-center w-full h-full z-40"
        onClick={onClose}
      >
        {/* modal */}
        <div
          className="bg-white/70 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:w-125 w-[92%]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <h2>Add New Task</h2>
            <Button
              variant="icon"
              className="flex items-center justify-center w-8 h-8 rounded-full"
            >
              <CrossIcon
                width={20}
                height={20}
                className="cursor-pointer rotate-45 text-white"
                onClick={onClose}
              />
            </Button>
          </div>
          <div className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="title" className="mb-1 block">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Enter something..."
                value={addTask}
                onChange={(e) => {
                  setAddTask(e.target.value);
                  setErrors((prev) => ({ ...prev, addTask: "" }));
                }}
                className={`w-full border rounded-md p-2 ${
                  errors.addTask ? "border-red-500" : "border-gray-300"
                }`}
              />

              {errors.addTask && (
                <p className="text-red-500 text-sm mt-1">{errors.addTask}</p>
              )}
              {/* Select */}
              <label htmlFor="priority" className="mb-1 block">
                Priority
              </label>
              <select
                value={priority}
                id="priority"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {/* date */}
              <label htmlFor="date" className="mb-1 block">
                Due Date
              </label>

              <input
                type="date"
                id="date"
                value={dueDate}
                onChange={(e) => {
                  setDueDate(e.target.value);
                  setErrors((prev) => ({ ...prev, dueDate: "" }));
                }}
                className={`w-full border rounded-md p-2 ${
                  errors.dueDate ? "border-red-500" : "border-gray-300"
                }`}
              />

              {errors.dueDate && (
                <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>
              )}
              <div className="flex justify-end space-x-4 mt-6">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Add Task
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTaskModal;
