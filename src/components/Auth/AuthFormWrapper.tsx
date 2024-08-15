import { useNavigate } from "react-router-dom";
import Button from "../commons/Button";

interface Props {
  title: string;
  subTitle: string;
  children: JSX.Element;
  buttonText: string;
  linkText: string;
  linkHref: string;
  linkDescription: string;
  onSubmit: () => void;
  onButtonClick: () => void;
  handleFormSwitch?: () => void;
  onCloseModal?: () => void;
}

const AuthFormWrapper = ({
  title,
  subTitle,
  children,
  buttonText,
  linkText,
  linkHref,
  linkDescription,
  onSubmit,
  onButtonClick,
  handleFormSwitch,
  onCloseModal,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="relative p-[1px] rounded-lg bg-gradient-to-br from-[#969696] to-[#343434] min-w-[463px] shadow-md">
      <div className="bg-[#27292D] text-white rounded-lg px-6 py-10">
        {onCloseModal ? (
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 text-white focus:outline-none bg-[#131319] w-8 h-8 rounded-full"
          >
            <span className="text-xl leading-4 font-light text-center">
              &times;
            </span>
          </button>
        ) : null}

        <div className="text-center mb-10">
          <p className="text-gray-500 text-[14px]">{title}</p>
          <p className="text-[18px] font-semibold mt-1">{subTitle}</p>
        </div>
        <form action="/" onSubmit={onSubmit}>
          {children}
          <div className="mx-[1.5px]">
            <Button type="submit" text={buttonText} onClick={onButtonClick} />
          </div>
        </form>
        <div className="mt-2">
          <button
            className="text-sm text-[#7F8084]"
            onClick={() => {
              if (handleFormSwitch) {
                handleFormSwitch();
              } else {
                navigate(linkHref);
              }
            }}
          >
            {linkDescription}{" "}
            <span className="text-[#C5C7CA] hover:text-blue-500">
              {linkText} &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthFormWrapper;
