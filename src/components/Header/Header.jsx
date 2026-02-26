import { BellDot, CircleUserRound } from "lucide-react";

function Header() {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3">
      <div className="flex justify-between items-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg p-2 w-max"
        />
        {/* Icons */}
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            <BellDot width={25} height={25} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <CircleUserRound width={36} height={36} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
