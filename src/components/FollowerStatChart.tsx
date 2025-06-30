'use client'
import { weeklyFollowersData,  } from '@/lib/data'
import React from 'react'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts'


const FollowerStatChart = () => {
  return (
    <div className="col-span-10 lg:col-span-7 max-lg:h-[320px] h-[450px] bg-[#ffffff] p-4 rounded-xl shadow-sm mt-4 ">
      <h1 className="text-xl font-medium text-gray-500 mb-2">
        Social Media Performance – Last 7 Days
      </h1>
      <ResponsiveContainer
        width="100%"
        height="90%"
        className="outline-none focus:outline-none focus:ring-0"
        style={{ outline: "none", boxShadow: "none" }}
      >
        <LineChart
          data={weeklyFollowersData}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="instagram"
            stroke="#EFF0A3"
            name="Instagram"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="linkedin"
            stroke="#A9C3F0"
            name="LinkedIn"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="twitter"
            stroke="#CFDECA"
            name="Twitter"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="youtube"
            stroke="#F87171"
            name="YouTube"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FollowerStatChart