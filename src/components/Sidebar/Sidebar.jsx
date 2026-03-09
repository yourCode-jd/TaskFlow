import { BarChart2, Home, Settings, Users, File } from "lucide-react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen rounded-xl text-white flex flex-col gap-5 bg-white/50 p-4">
      <h2 className="uppercase bg-cyan-700 hover:bg-cyan-800 text-center p-6 rounded-xl text-white!">
        TaskFlow
      </h2>

      <ul className="space-y-2">
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <Button
                variant="navLink"
                size="md"
                className={`w-full justify-start py-3.5 ${
                  isActive ? "bg-cyan-800!" : ""
                }`}
              >
                <Home size={20} /> Dashboard
              </Button>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/tasks">
            {({ isActive }) => (
              <Button
                variant="navLink"
                size="md"
                className={`w-full justify-start py-3.5 ${
                  isActive ? "bg-cyan-800!" : ""
                }`}
              >
                <File size={20} /> My Tasks
              </Button>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/teams">
            {({ isActive }) => (
              <Button
                variant="navLink"
                size="md"
                className={`w-full justify-start py-3.5 ${
                  isActive ? "bg-cyan-800!" : ""
                }`}
              >
                <Users size={20} /> Teams
              </Button>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/analytics">
            {({ isActive }) => (
              <Button
                variant="navLink"
                size="md"
                className={`w-full justify-start py-3.5 ${
                  isActive ? "bg-cyan-800!" : ""
                }`}
              >
                <BarChart2 size={20} /> Analytics
              </Button>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            {({ isActive }) => (
              <Button
                variant="navLink"
                size="md"
                className={`w-full justify-start py-3.5 ${
                  isActive ? "bg-cyan-800!" : ""
                }`}
              >
                <Settings size={20} /> Settings
              </Button>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
