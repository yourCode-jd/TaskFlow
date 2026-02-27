import { BellDot, CircleUserRound, Search } from "lucide-react";

function Header() {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
      <div className="flex justify-between items-center">
        <div className="relative">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-200 rounded-lg p-2 w-max pr-10"
          />
          <Search
            width={20}
            height={20}
            className="absolute right-3 top-3 text-gray-500"
          />
        </div>
        {/* Icons */}
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            <BellDot width={30} height={30} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <CircleUserRound width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
