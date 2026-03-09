import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="bg-[url('./assets/abstract-bg.jpg')] bg-cover min-h-screen">
      <div className="grid lg:grid-cols-[280px_1fr] gap-5 bg-black/20 backdrop-blur-md p-4">
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
