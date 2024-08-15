import React from "react";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70 backdrop-blur-xl"></div>
      <div className="rounded shadow-lg z-10 p-4">{children}</div>
    </div>
  );
};

export default Modal;
