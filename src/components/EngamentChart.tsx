'use client'
import { engagementData } from "@/lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EngamentChart = () => {
  return (
    <div className="col-span-10 lg:col-span-4 row-span-2 max-lg:h-[320px] h-[600px] bg-[#ffffff] p-4 rounded-xl shadow-sm mt-2">
      <h1 className="text-xl font-medium text-gray-500 mb-2">
        Engagement – This Week
      </h1>
      <ResponsiveContainer width="100%" height="95%">
        <BarChart
          data={engagementData}
          layout="vertical"
          margin={{ top: 18, right: 30, left: 40, bottom: 20 }}
          barGap={10}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="platform" />
          <Tooltip />
          <Legend />
          <Bar dataKey="likes" fill="#F87171" radius={[0, 4, 4, 0]} />
          <Bar dataKey="comments" fill="#CFDECA" radius={[0, 4, 4, 0]} />
          <Bar dataKey="shares" fill="#A9C3F0" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EngamentChart;
