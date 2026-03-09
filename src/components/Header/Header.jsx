import { BellDot, CircleUserRound, Search } from "lucide-react";
import { useState } from "react";
function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search submission logic here
    console.log("Search term:", searchTerm);
  };
  return (
    <header className="rounded-xl p-4 shadow-xs bg-white/70 lg:mb-5 mb-3">
      <div className="flex justify-between items-center lg:gap-5 gap-3">
        <form onSubmit={handleSearchSubmit} className="relative lg:w-125">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="rounded-xl p-2 pr-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search
            width={20}
            height={20}
            className="absolute right-3 top-3.5 text-cyan-800"
          />
        </form>
        {/* Icons */}
        <div className="flex lg:gap-4 gap-2">
          <div className="text-cyan-700 hover:bg-white/50 cursor-pointer bg-white/30 p-2 rounded-full">
            <BellDot width={25} height={25} />
            <sr-only className="sr-only">Notifications</sr-only>
          </div>
          <div className="relative">
            <div
              onClick={toggleDropdown}
              className="text-cyan-700 hover:bg-white/50 cursor-pointer bg-white/30 p-2 rounded-full"
            >
              <CircleUserRound width={25} height={25} />
            </div>
            {/* dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-cyan-800 text-white backdrop-blur-sm rounded-md shadow-lg z-10">
                {/* Dropdown content */}
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-cyan-700">Profile</li>
                  <li className="px-4 py-2 hover:bg-cyan-700">Settings</li>
                  <li className="px-4 py-2 hover:bg-cyan-700">Logout</li>
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
