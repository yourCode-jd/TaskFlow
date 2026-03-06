import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import DashboardContent from "../DashboardContent/DashboardContent";

function Dashboard() {
  return (
    <div className="bg-[url('./assets/abstract-bg.jpg')] bg-opacity-10 bg-cover p-4">
      <div className="grid lg:grid-cols-[280px_1fr] grid-cols-1fr gap-5 rounded-xl bg-white/80 backdrop-blur-md p-4">
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
