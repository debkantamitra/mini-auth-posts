import React from "react";

interface Props {
  onClick: () => void;
}

const ThreeDotsButton = ({ onClick }: Props) => {
  return (
    <button
      className="rounded-full flex items-center justify-center text-[#C5C7CA] text-sm font-thin -mt-4"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      &#x2022;&#x2022;&#x2022;
    </button>
  );
};

export default ThreeDotsButton;
