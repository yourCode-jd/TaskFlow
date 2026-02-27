import React, { useState } from "react";
import { Delete, Edit, Plus } from "lucide-react";
import Button from "../Button/Button";
import AddTaskModal from "../Modal/AddTaskModal";

function TableCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-4 p-4 relative overflow-hidden bg-white/20 backdrop-blur-sm rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="">Task</h2>
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="primary"
          size="md"
        >
          <Plus width={20} height={20} />
          New Task
        </Button>
      </div>
      {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} />}
      <div>
        <table className="w-full mt-4 border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="px-4 py-2 text-left">Task</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Priority</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t border-gray-200 px-4 py-2">Task 1</td>
              <td className="border-t border-gray-200 px-4 py-2">2023-09-01</td>
              <td className="border-t border-gray-200 px-4 py-2">
                In Progress
              </td>
              <td className="border-t border-gray-200 px-4 py-2">High</td>
              <td className="border-t border-gray-200 px-4 py-2 space-x-2">
                <Button variant="secondary" size="sm">
                  <Edit width={16} height={16} /> Edit
                </Button>
                <Button variant="secondary" size="sm">
                  <Delete width={16} height={16} />
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCard;
