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
        className="fixed inset-0 bg-white/30 flex items-center justify-center w-full h-full"
        onClick={onClose}
      >
        {/* modal */}
        <div
          className="bg-purple-600/60 backdrop-blur-md border border-white/20 rounded-xl p-4 w-125"
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
              <label className="mb-1 block">Due Date</label>
              <input
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
