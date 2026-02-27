import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import DashboardContent from "../DashboardContent/DashboardContent";

function Dashboard() {
  return (
    <div className="bg-linear-to-tr from-blue-200 to-purple-200 p-4">
      <div className="grid lg:grid-cols-[280px_1fr] grid-cols-1fr gap-5 rounded-xl ">
        <aside className="">
          <Sidebar />
        </aside>
        <main className="">
          <Header />
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
