import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import DashboardContent from "../DashboardContent/DashboardContent";

function Dashboard() {
  return (
    <div className="grid grid-cols-[250px_1fr] gap-6 p-4 bg-linear-to-br from-blue-500 to-purple-500">
      <aside className="">
        <Sidebar />
      </aside>
      <main className="">
        <Header />
        <DashboardContent />
      </main>
    </div>
  );
}

export default Dashboard;
