import React from 'react'

const CustomBarChart = ({ value = 0 }: { value?: number }) => {
  return (
    <div className="mb-2">
      <p className="text-xl font-medium  my-2">
        <span className="text-sm text-gray-600 ">CTR: </span>{value}%
      </p>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${value}%` }} // your percentage
        ></div>
      </div>
    </div>
  );
};

export default CustomBarChart