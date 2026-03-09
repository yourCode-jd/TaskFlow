import React, { useState } from "react";
import { Delete, Edit, Plus } from "lucide-react";
import Button from "../Button/Button";
import AddTaskModal from "../Modal/AddTaskModal";

function TableCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="lg:mt-5 mt-3 p-4 bg-white/70 rounded-xl">
        <div className="flex justify-between items-center">
          <h2>Task</h2>
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="primary"
            size="md"
          >
            <Plus width={20} height={20} />
            New Task
          </Button>
        </div>
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
              <tr>
                <td className="border-t border-white/10 px-4 py-3">Task 1</td>

                <td className="border-t border-white/10 px-4 py-3">
                  2023-09-01
                </td>

                <td className="border-t border-white/10 px-4 py-3">
                  In Progress
                </td>

                <td className="border-t border-white/10 px-4 py-3">High</td>

                <td className="border-t border-white/10 px-4 py-3">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1">
                      <Edit size={16} />
                      Edit
                    </button>

                    <button className="flex items-center gap-1 text-red-500">
                      <Delete size={16} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default TableCard;
