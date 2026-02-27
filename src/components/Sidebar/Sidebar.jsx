"Use client";
import { BarChart2, Home, Settings, Users, File } from "lucide-react";
import Button from "../Button/Button";

function Sidebar() {
  return (
    <div className="h-screen bg-white/20 backdrop-blur-sm rounded-xl text-white p-6">
      <h2 className="uppercase text-white!">TaskFlow</h2>
      <div className="mt-4 pt-4 border-t border-white/20">
        <ul className="space-y-2">
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start opacity-50"
            >
              <Home width={20} height={20} /> Dashboard
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start opacity-50"
            >
              <File width={20} height={20} /> My Tasks
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start opacity-50"
            >
              <Users width={20} height={20} /> Teams
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start opacity-50"
            >
              <BarChart2 width={20} height={20} /> Analytics
            </Button>
          </li>
          <li>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-start opacity-50"
            >
              <Settings width={20} height={20} /> Settings
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
