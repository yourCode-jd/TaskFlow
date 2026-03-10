import { useState } from "react";
import { Plus, Trash, Search } from "lucide-react";
import Button from "../Button/Button";
import AddTaskModal from "../Modal/AddTaskModal";

function TableCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="lg:mt-5 mt-3 md:p-6 p-4 bg-white/70 backdrop-blur-md rounded-xl">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-3 flex-col md:flex-row">
          <h2>Task</h2>

          <div className="flex md:gap-3 gap-1 md:items-center flex-col md:flex-row w-full md:w-auto">
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search task..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="rounded-xl p-2! pr-10 border"
              />

              <Search
                size={18}
                className="absolute right-3 top-3 text-cyan-800"
              />
            </div>

            <Button
              onClick={() => setIsModalOpen(true)}
              variant="primary"
              size="md"
            >
              <Plus width={20} height={20} />
              New Task
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-175 w-full mt-4 border-collapse shadow-xs">
            <thead>
              <tr className="bg-cyan-800/10">
                <th className="px-4 py-3 text-left">Task</th>
                <th className="px-4 py-3 text-left">Due Date</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Priority</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredTasks.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">
                    No tasks found
                  </td>
                </tr>
              ) : (
                filteredTasks.map((task, index) => (
                  <tr key={index}>
                    <td className="border-t border-white/10 px-4 py-3">
                      {task.title}
                    </td>

                    <td className="border-t border-white/10 px-4 py-3">
                      {task.dueDate}
                    </td>

                    <td className="border-t border-white/10 px-4 py-3">
                      {task.status}
                    </td>

                    <td className="border-t border-white/10 px-4 py-3">
                      {task.priority}
                    </td>

                    <td className="border-t border-white/10 px-4 py-3">
                      <button
                        className="flex items-center gap-1 text-red-500"
                        onClick={() => deleteTask(index)}
                      >
                        <Trash size={16} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <AddTaskModal
          onClose={() => setIsModalOpen(false)}
          onAddTask={addTask}
        />
      )}
    </>
  );
}

export default TableCard;
