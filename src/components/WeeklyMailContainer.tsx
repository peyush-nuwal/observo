"use client";
import React, { useState } from "react";
import { weeklyMails } from "@/lib/data";
import WeeklyMailPreview from "./WeeklyMailPreview";
import Modal from "./Modal";
import WeeklyMailBrief from "./WeeklyMailBrief";
import { WeeklyMailProps } from "../../types";

const WeeklyMailContainer = () => {
  const [selectedMail, setSelectedMail] = useState<WeeklyMailProps | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  return (
    <div className=" min-w-[75vw] lg:min-w-[60vw]  h-[70vh] flex flex-col gap-4 lg:gap-2 overflow-auto px-2 py-4 lg:px-5 lg:py-6">
      {weeklyMails.map((mail, idx) => (
        <WeeklyMailPreview
          {...mail}
          onClick={() => {
            setSelectedMail(mail);
            setIsModalOpen(true);
          }}
          key={idx}
        />
      ))}

      {selectedMail && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <WeeklyMailBrief {...selectedMail} />
        </Modal>
      )}
    </div>
  );
};

export default WeeklyMailContainer;
