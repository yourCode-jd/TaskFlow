import { BellDot, CircleUserRound } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Dashboard",
  "/tasks": "My Tasks",
  "/teams": "Teams",
  "/analytics": "Analytics",
  "/profile": "Profile",
  "/settings": "Settings",
};

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="rounded-xl md:px-6 px-4 py-4 shadow-xs bg-white/70 lg:mb-5 mb-3">
      <div className="flex justify-between items-center lg:gap-5 gap-3">
        {/* Dynamic Page Title */}
        <h1 className="text-xl font-bold! text-cyan-900 uppercase">{title}</h1>

        {/* Icons */}
        <div className="flex items-center lg:gap-3 gap-2">
          <div className="text-cyan-700 cursor-pointer">
            <BellDot width={25} height={25} />
          </div>

          <div className="relative">
            <div
              onClick={toggleDropdown}
              className="text-cyan-700 hover:bg-white/50 cursor-pointer bg-white/30 md:p-1.5 p-1 rounded-full"
            >
              {/* <CircleUserRound width={25} height={25} /> */}
              {/* Profile picture */}
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-cyan-800 text-white rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <Link
                      to="/profile"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-cyan-700"
                    >
                      Profile
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/settings"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-cyan-700"
                    >
                      Settings
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/logout"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-cyan-700"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
