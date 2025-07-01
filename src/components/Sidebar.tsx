'use client'
import { dashboardNavigation } from '@/lib/data';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Sidebar = () => {
    const [selected, setselected] = useState<string>("/dashboard");
    

    const handleSelect = (val:string) => {
         setselected(val);
    }
  return (
    <div className="max-lg:w-[60px] w-[13%] px-2 py-2 h-screen border-r border-gray-200 bg-[#ffffff] ">
      <div className="flex-center ">
        <Image src={"/logo.png"} width={60} height={60} alt="l" />{" "}
        <h1 className="max-lg:hidden text-2xl text-gray-700 font-semibold -ml-3 ">observo</h1>{" "}
      </div>

      <ul className="list-none mt-5 flex flex-col gap-1">
        {dashboardNavigation.map((item, idx) => (
          <li
            key={item.id ?? idx}
            onClick={() => handleSelect(item.path)}
            className={` ${
              selected == item.path
                ? "bg-black text-white"
                : "text-gray-500 hover:bg-gray-200"
            } rounded-lg`}
          >
            <Link
              href={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-md  transition-colors"
            >
              <item.icon className="size-6 " />
              <span className="max-lg:hidden text-sm font-medium lg:text-lg">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar