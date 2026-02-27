"Use client";
import { BarChart2, Home, Settings, Users, File } from "lucide-react";
import Button from "../Button/Button";

function Sidebar() {
  return (
    <div className="h-screen rounded-xl text-white flex flex-col gap-5 border  border-white/50 bg-white/10 p-4">
      <h2 className="uppercase hover:bg-purple-600 bg-purple-400 text-center p-6 rounded-xl text-white!">
        TaskFlow
      </h2>
      <div className="">
        <ul className="space-y-2">
          <li>
            <Button
              variant="navLink"
              size="md"
              className="w-full justify-start py-3.5"
            >
              <Home width={20} height={20} /> Dashboard
            </Button>
          </li>
          <li>
            <Button
              variant="navLink"
              size="md"
              className="w-full justify-start py-3.5"
            >
              <File width={20} height={20} /> My Tasks
            </Button>
          </li>
          <li>
            <Button
              variant="navLink"
              size="md"
              className="w-full justify-start py-3.5"
            >
              <Users width={20} height={20} /> Teams
            </Button>
          </li>
          <li>
            <Button
              variant="navLink"
              size="md"
              className="w-full justify-start py-3.5"
            >
              <BarChart2 width={20} height={20} /> Analytics
            </Button>
          </li>
          <li>
            <Button
              variant="navLink"
              size="md"
              className="w-full justify-start py-3.5"
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
