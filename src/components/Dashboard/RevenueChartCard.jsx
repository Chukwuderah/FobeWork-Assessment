import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const RevenueChartCard = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 w-[547px] h-fit ">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-gray-800 dark:text-white font-semibold">
        Monthly View
      </h3>
      <select className="bg-gray-100 dark:bg-gray-700 text-sm px-2 py-1 rounded">
        <option>Last 7 months</option>
      </select>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#22c55e"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
