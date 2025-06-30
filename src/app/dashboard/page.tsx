
import EngagementRateChart from "@/components/EngagementRateChart";
import EngamentChart from "@/components/EngamentChart";
import FollowerStatChart from "@/components/FollowerStatChart";
import PlateformSummaryTable from "@/components/PlateformSummaryTable";
import StatCardContainer from "@/components/StatCardContainer";
import TopPostContainer from "@/components/TopPostContainer";


const page = () => {
  
  return (
    <div className=" px-2 lg:px-4 py-5 ">
      <StatCardContainer />
      <div className="grid grid-cols-10  lg:gap-2">
        <EngagementRateChart />
        <FollowerStatChart />
        <PlateformSummaryTable />
        <EngamentChart />
        <TopPostContainer />
      </div>
     
    </div>
  );
};

export default page;
