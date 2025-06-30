import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export  default function  DashboardLayout ({children}: Readonly<{
    children: React.ReactNode;
}>)  {
    
    return (
      <div className="flex">
        <Sidebar />
            <div className="w-full h-screen overflow-y-auto  px-2">
                <Topbar/>
                {children}
            </div>
      </div>
    );
    
}