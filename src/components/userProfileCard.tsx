'use client'
import { DoorOpen, Pencil } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useRef, useState } from 'react'

const userProfileCard = () => {
  const dropdownRef=useRef<HTMLDivElement |null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  }
  const mouseOver = () => {
    setIsOpen(true);
  }

  const mouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div
      onClick={toggleDropDown}
      onMouseEnter={mouseOver}
      onMouseLeave={mouseLeave}
      className="relative flex-center gap-2  px-2 py-1 hover:bg-gray-200 cursor-pointer rounded-lg"
    >
      <Image
        src={"/pfp.jpeg"}
        alt="profile-photo"
        width={50}
        height={50}
        className="size-10 rounded-full object-cover border border-gray-300"
      />
      <div className="max-lg:hidden">
        <h1 className=" tracking-wide leading-5 font-medium">arcanagel</h1>
        <h3 className="text-sm font-semibold text-gray-500">user@gmail.com</h3>
      </div>
      {/* dropdown menu  */}
      <div
        ref={dropdownRef}
        className={`absolute top-full right-0 lg:left-0   min-w-fit  w-full bg-white border border-gray-300 shadow-sm rounded-xl py-4 px-2 mt-1 text-lg font-medium text-gray-500 shrink-0
          transition-all duration-200 ease-out z-50
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
          }
        `}
      >
        <Link
          href=""
          className="flex items-center gap-2 hover:bg-gray-200 rounded-lg py-1 px-2  text-nowrap "
        >
          {" "}
          <Pencil className="size-5" /> Edit profile
        </Link>
        <h5 className="flex items-center gap-2 hover:bg-gray-200 hover:text-red-600 rounded-lg  py-1 px-2 text-nowrap">
          <DoorOpen />
          Logout
        </h5>
      </div>
    </div>
  );
}

export default userProfileCard