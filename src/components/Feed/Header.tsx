import React from "react";

interface Props {
  title: string;
  paragraph: string;
  titleClassName?: string;
  paragraphClassName?: string;
}

const Header = ({
  title,
  paragraph,
  titleClassName = "text-3xl mb-6",
  paragraphClassName = "mb-6",
}: Props) => {
  return (
    <div>
      <h1 className={titleClassName}>{title}</h1>
      <p className={paragraphClassName}>{paragraph}</p>
    </div>
  );
};

export default Header;
