interface Props {
  title: string;
  paragraph: string;
  titleClassName?: string;
  paragraphClassName?: string;
}

const Header = ({
  title,
  paragraph,
  titleClassName = "text-[#C5C7CA] text-[28px] mb-2 font-medium",
  paragraphClassName = "text-[#7F8084] mb-10 w-10/12",
}: Props) => {
  return (
    <div>
      <h1 className={titleClassName}>{title}</h1>
      <p className={paragraphClassName}>{paragraph}</p>
    </div>
  );
};

export default Header;
