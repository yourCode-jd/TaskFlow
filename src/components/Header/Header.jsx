import { BellDot, CircleUserRound, Search } from "lucide-react";

function Header() {
  return (
    <div className="rounded-xl p-4 shadow-xs bg-purple-600/20">
      <div className="flex justify-between items-center gap-5">
        <div className="relative w-125">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="rounded-xl p-2 pr-10"
          />
          <Search
            width={20}
            height={20}
            className="absolute right-3 top-3.5 text-white"
          />
        </div>
        {/* Icons */}
        <div className="flex gap-4">
          <button className="text-white hover:text-white/80">
            <BellDot width={30} height={30} />
          </button>
          <button className="text-white hover:text-white/80">
            <CircleUserRound width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
