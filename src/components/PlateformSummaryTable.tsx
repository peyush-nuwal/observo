import { platformPerformanceData } from "@/lib/data";
import React from "react";
import { convertSocialMetric } from "../../lib/utils";

const PlateformSummaryTable = () => {
  return (
    <div className=" col-span-10 lg:col-span-6 h-fit  bg-[#ffffff] p-4 rounded-xl shadow-sm mt-2">
      <h1 className="text-xl font-medium text-gray-500 mb-2">
        Platform Summary
      </h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b border-gray-200 text-left max-lg:text-base   text-gray-500">
            <th className="text-left py-3 px-4 font-semibold">Platform</th>
            <th className="text-left py-3 px-4 font-semibold">Followers</th>
            <th className="text-left py-3 px-4 font-semibold ">Impressions</th>
            <th className="text-left py-3 px-4 font-semibold text-nowrap max-lg:hidden">
              Engagement Rate
            </th>
            <th className="text-left py-3 px-4 font-semibold max-lg:hidden">
              CTR
            </th>
            <th className="text-left py-3 px-2 font-semibold">Posts</th>
          </tr>
        </thead>
        <tbody>
          {platformPerformanceData.map((data, idx) => (
            <tr
              key={idx}
              className=" text-left max-lg:text-base text-lg  text-gray-700 "
            >
              <td className="text-left py-2 px-4 ">{data.platform}</td>
              <td className="text-left py-2 px-4 ">
                {convertSocialMetric(data.followers)}
              </td>
              <td className="text-left py-2 px-4  ">
                {convertSocialMetric(data.impressions)}
                
              </td>
              <td className="text-left py-2 px-4 max-lg:hidden ">
                {data.engagementRate}%
              </td>

              <td className="text-left py-2 px-4  max-lg:hidden">{data.ctr}%</td>
              <td className="text-left py-2 px-2 ">{data.postsThisWeek}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlateformSummaryTable;
