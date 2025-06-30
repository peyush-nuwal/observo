"use client";

import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { engagementRates } from "@/lib/data";
import { EngagementRate } from "../../types";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);




const platformColors: Record<EngagementRate["platform"], string> = {
  Instagram: "#EFF0A3",
  Twitter: "#CFDECA",
  LinkedIn: "#A9C3F0",
  YouTube: "#F87171",
};

const EngagementRateChart = () => {
    const data = {
      labels: engagementRates.map((d) => d.platform),
      datasets: [
        {
          label: "Engagement Rate (%)",
          data: engagementRates.map((d) => d.engagementRate),
          backgroundColor: engagementRates.map(
            (d) => platformColors[d.platform]
          ),
          borderWidth: 2,
        },
      ],
    };


    
  const options = {
    scales: {
      r: {
        ticks: {
          display: false,
          color: "#212121",
          stepSize: 3,
        },
        grid: {
          color: "#E0E0E0",
        },
        pointLabels: {
          color: "#212121",
          font: {
            size: 12,
            lineHeight: 1.2,
          },
          padding: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          color: "#212121",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
    
    return (
      <div className=" col-span-10 lg:col-span-3 max-lg:h-[450px] h-[450px] bg-[#ffffff] p-4 rounded-xl shadow-sm mt-4">
        <h1 className="text-xl font-medium text-gray-500 mb-2">
          Engagement Rate
        </h1>
        
          <PolarArea data={data} options={options} style={{padding:"30px"}} />
        
      </div>
    );
}

export default EngagementRateChart;