import React, { useState } from "react";
import { Delete, Edit, Plus } from "lucide-react";
import Button from "../Button/Button";
import AddTaskModal from "../Modal/AddTaskModal";

function TableCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mt-5 p-4 bg-purple-600/20 rounded-xl">
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
        <div className="overflow-x-auto">
          <table className="w-full mt-4 border-collapse shadow-xs">
            <thead>
              <tr className="bg-purple-600/10">
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
                <td className="border-t border-white/10 px-4 py-3 space-x-4 flex">
                  <a className="flex items-center gap-1">
                    <Edit width={16} height={16} /> Edit
                  </a>
                  <a className="flex items-center gap-1 text-red-500">
                    <Delete width={16} height={16} />
                    Delete
                  </a>
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
