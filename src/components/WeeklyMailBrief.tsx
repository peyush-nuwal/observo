import React from "react";
import { WeeklyMailProps } from "../../types";
import { formatMailDate } from "../../lib/utils";
const WeeklyMailBrief = ({  title, description, date }: WeeklyMailProps) => {
  return (
    <div className=" w-[75vw] lg:w-[60vw]   h-[70vh] flex flex-col gap-4 lg:gap-2 overflow-auto px-3 py-4 lg:px-5 lg:py-6">
      <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
        {title}
      </h1>
      <h4 className="text-sm lg:text-base font-medium text-gray-500 px-1">
        {formatMailDate(date)}
      </h4>
      <p className="pr-2 text-gray-700 text-base lg:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default WeeklyMailBrief;
