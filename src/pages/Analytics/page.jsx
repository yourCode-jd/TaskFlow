import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan 1", sessions: 10 },
  { name: "Jan 3", sessions: 48 },
  { name: "Jan 5", sessions: 12 },
  { name: "Jan 7", sessions: 45 },
  { name: "Jan 9", sessions: 22 },
  { name: "Jan 11", sessions: 8 },
  { name: "Jan 13", sessions: 40 },
  { name: "Jan 15", sessions: 0 },
  { name: "Jan 17", sessions: 50 },
  { name: "Jan 19", sessions: 18 },
  { name: "Jan 21", sessions: 5 },
  { name: "Jan 23", sessions: 48 },
  { name: "Jan 25", sessions: 30 },
  { name: "Jan 27", sessions: 0 },
  { name: "Jan 28", sessions: 45 },
];

function page() {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl md:p-6 p-4 shadow-sm">
      {/* Chart Card */}
      <div className="bg-white/30 rounded-xl p-4">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-600">Sessions</h3>
          <span className="text-sm font-semibold">741</span>
        </div>

        {/* Chart */}
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="sessions"
                stroke="#0e7490"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default page;
