import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="bg-[url('./assets/abstract-bg.jpg')] bg-cover min-h-screen">
      <div className="flex flex-col lg:flex-row lg:gap-5 gap-3 bg-cyan-800/60 backdrop-blur-md p-4">
        <aside className="lg:w-72">
          <Sidebar />
        </aside>

        <main className="flex-1">
          <Header />
          <div className="main-content min-h-[80vh]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
