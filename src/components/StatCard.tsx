import { Instagram, MoveUpRight } from "lucide-react";
import React from 'react'
import { StatCardProps } from "../../types";
import { convertSocialMetric } from "../../lib/utils";



const StatCard = ({
  icon,
  platform,
  followers,
  gained,
  index,
}: StatCardProps & { index: number }) => {
  const bgStyles: string[] = ["bg-yellow", "bg-blue", "bg-green"];

  const getBg = (index: number): string => {
    return bgStyles[index] || "bg-[#ffffff] border border-gray-300";
  };

  return (
    <div
      className={`px-7 py-5 md:flex-1 min-w-[250px] max-w-full  rounded-3xl ${getBg(
        index
      )} `}
    >
      <div className="flex items-center justify-between   font-semibold tracking-wide ">
        <h2 className="flex items-center gap-2">
          {icon}
          <span className="font-medium text-gray-700">{platform}</span>
        </h2>
        <MoveUpRight className="size-7 stroke-1 text-gray-700  " />
      </div>
      <h1 className="text-4xl  mt-4">
        {convertSocialMetric(followers)}
        <span className="text-xl    ">gained </span>
      </h1>
      <span className="block pt-5 font-medium text-gray-700">
        +{gained} Today
      </span>
    </div>
  );
};

export default StatCard