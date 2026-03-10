import { Link } from "react-router-dom";

function page() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center rounded-xl px-20 shadow-xs bg-cyan-800/60">
      <h1 className="text-6xl! font-bold! text-white!">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-white!">
        Page Not Found
      </h2>

      <p className="mt-2 text-white!">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-cyan-800 text-white rounded-lg hover:bg-cyan-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default page;
