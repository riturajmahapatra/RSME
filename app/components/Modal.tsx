// components/Modal.tsx
import React, { FC, MouseEvent } from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const handleModalClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white  p-8 rounded shadow-md"
        onClick={handleModalClick}
      >
        <button className=" font-bod text-black" onClick={onClose}>
          Close
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
