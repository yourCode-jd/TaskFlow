import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Card from "../Card/Card";

function Dashboard() {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <aside className="">
        <Sidebar />
      </aside>
      <main className="p-4">
        <Header />
        <Card />
      </main>
    </div>
  );
}

export default Dashboard;
