import { useState, useEffect } from "react";
import { BarChart2, Home, Settings, Users, File, Menu, X } from "lucide-react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "My Tasks", path: "/tasks", icon: File },
  { name: "Teams", path: "/teams", icon: Users },
  { name: "Analytics", path: "/analytics", icon: BarChart2 },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="lg:h-screen rounded-xl text-white flex flex-col gap-5 bg-white/70 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="uppercase bg-cyan-800 text-white! text-center px-6 py-3 rounded-xl lg:min-w-full">
          TaskFlow
        </h2>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="lg:hidden text-cyan-800">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Navigation */}
      <ul
        className={`space-y-2 transition-transform duration-300 ease-in-out
    fixed top-0 left-0 h-screen w-64 bg-cyan-800 p-4 z-40 transform
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0 lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:p-0`}
      >
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
              >
                {({ isActive }) => (
                  <Button
                    variant="navLink"
                    size="md"
                    className={`w-full justify-start py-3.5 ${
                      isActive
                        ? "lg:bg-cyan-800 bg-white lg:text-white text-cyan-800"
                        : "lg:bg-cyan-800/30 bg-white/30 hover:bg-cyan-800"
                    }`}
                  >
                    <Icon size={20} />
                    {item.name}
                  </Button>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
