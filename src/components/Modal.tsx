"use client";
import React, { JSX } from "react";
import { X } from "lucide-react";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};
const Modal = ({ children, isOpen = true, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/40 z-[998] flex items-center justify-center animate-[modalIn_500ms_ease-out_forwards]">
        <div
          className="relative bg-white rounded-xl border border-gray-200 w-fit h-fit p-6 pt-12 z-[999]
         "
        >
          {children}
          <X
            onClick={onClose}
            className="size-8 text-gray-700 absolute top-4 right-4 cursor-pointer"
          />
        </div>
      </div>
    )
  );
};

export default Modal;
