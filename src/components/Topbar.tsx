"use client";
import { Mail, Bell } from "lucide-react";
import React, { useState } from "react";
import UserProfileCard from "./UserProfileCard";
import Modal from "./Modal";

const Topbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="h-[60px] w-full flex justify-end items-center gap-2 px-4">
      <div
        onClick={() => setModalOpen(true)}
        className="relative p-2 border border-gray-500 rounded-full cursor-pointer tooltip "
        data-tooltip="Mail"
      >
        <Mail className="size-5 text-gray-700" />
        <div className="absolute top-2 right-2 size-2 rounded-full bg-red-500 animate-pulse duration-75" />
      </div>
      <div className="relative p-2 border border-gray-500 rounded-full cursor-pointer tooltip "
        data-tooltip="Alret">
        <Bell className="size-5 text-gray-700" />
        <div className="absolute top-2 right-2 size-2 rounded-full bg-red-500 animate-pulse duration-100" />
      </div>

      <UserProfileCard />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="min-w-md min-h-64">modala</div>
      </Modal>
    </div>
  );
};

export default Topbar;
