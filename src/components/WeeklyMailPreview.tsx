import { formatMailDate } from "../../lib/utils";
import { WeeklyMailProps } from "../../types";

type WeeklyMailPreviewProps = WeeklyMailProps & {
  onClick: () => void;
};
 const WeeklyMailPreview = ({
   title,
   description,
   date,
   onClick,
 }: WeeklyMailPreviewProps) => {
   return (
     <div
       onClick={() => onClick()}
       className="hover:bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 flex justify-between items-start cursor-pointer transition"
     >
       <div>
         <h1 className="text-base lg:text-lg font-medium  text-gray-800">
           {title}
         </h1>
         <h4 className="text-sm text-gray-500 max-w-[250px] lg:max-w-lg  truncate ">
           {description}
         </h4>
       </div>
       <h1 className="text-sm font-medium text-gray-500 whitespace-nowrap">
         {formatMailDate(date)}
       </h1>
     </div>
   );
 };
export default WeeklyMailPreview