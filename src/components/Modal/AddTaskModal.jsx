import { CrossIcon } from "lucide-react";
import Button from "../Button/Button";
import { useState } from "react";

function AddTaskModal({ onClose }) {
  const [addTask, setAddTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");

  // Function
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Task Added:", { addTask, priority, dueDate });
  };

  return (
    <>
      {/* overlay */}
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* modal */}
        <div
          className="p-6 border border-gray-200 rounded-md bg-white w-125"
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
                className="cursor-pointer rotate-45"
                onClick={onClose}
              />
            </Button>
          </div>
          <div className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="mb-1 block">Task Title</label>
              <input
                type="text"
                placeholder="Enter something..."
                value={addTask}
                onChange={(e) => setAddTask(e.target.value)}
              />
              {/* Select */}
              <label className="mb-1 block">Priority</label>
              <select
                value={priority}
                id="select"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {/* date */}
              <label>Due Date</label>
              <input
                className="mb-1 block"
                type="date"
                id="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <div className="flex justify-end space-x-4 mt-6">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="button" variant="primary">
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
