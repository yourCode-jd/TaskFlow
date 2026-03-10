import { CheckCircle, Clock, Users, BarChart } from "lucide-react";

function page() {
  const stats = [
    {
      title: "Total Tasks",
      value: "24",
      icon: CheckCircle,
    },
    {
      title: "In Progress",
      value: "8",
      icon: Clock,
    },
    {
      title: "Team Members",
      value: "12",
      icon: Users,
    },
    {
      title: "Completed",
      value: "16",
      icon: BarChart,
    },
  ];
  return (
    <>
      <div className="lg:space-y-6 space-y-3">
        {/* Stats Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-5 gap-3">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-xl p-5 shadow-sm flex items-center justify-between"
              >
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <h3 className="text-2xl font-semibold">{item.value}</h3>
                </div>

                <div className="bg-cyan-800/10 p-3 rounded-lg">
                  <Icon className="text-cyan-800" size={24} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-4">
            <li className="flex justify-between border-b border-cyan-800/10 pb-2">
              <span className="text-[#333333]">Design landing page</span>
              <span className="text-sm text-gray-500">Today</span>
            </li>

            <li className="flex justify-between border-b border-cyan-800/10 pb-2">
              <span className="text-[#333333]">Fix mobile navbar</span>
              <span className="text-sm text-gray-500">Yesterday</span>
            </li>

            <li className="flex justify-between border-b border-cyan-800/10 pb-2">
              <span className="text-[#333333]">Update analytics dashboard</span>
              <span className="text-sm text-gray-500">2 days ago</span>
            </li>

            <li className="flex justify-between">
              <span className="text-[#333333]">Create new team page</span>
              <span className="text-sm text-gray-500">3 days ago</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <Card /> */}
    </>
  );
}

export default page;
