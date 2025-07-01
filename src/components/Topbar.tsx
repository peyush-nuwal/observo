"use client";
import {  Bell } from "lucide-react";
import React, { useState } from "react";
import UserProfileCard from "./UserProfileCard";
import Modal from "./Modal";
import WeeklyMailContainer from "./WeeklyMailContainer";

const Topbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="h-[60px] w-full flex justify-end items-center gap-2 px-4">
      <div
        onClick={() => setModalOpen(true)}
        className="relative p-2 border border-gray-500 rounded-full cursor-pointer tooltip "
        data-tooltip="Alert"
      >
        <Bell className="size-5 text-gray-700" />
        <div className="absolute top-2 right-2 size-2 rounded-full bg-red-500 animate-pulse duration-100" />
      </div>
   

      <UserProfileCard />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
       <WeeklyMailContainer/>
      </Modal>

    </div>
  );
};

export default Topbar;
