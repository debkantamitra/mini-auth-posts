type ButtonType = "button" | "submit" | "reset";

interface Props {
  type: ButtonType;
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ type, text, onClick, className }: Props) => {
  return (
    <button
      type={type}
      className={`w-full py-2 bg-[#4A96FF] hover:bg-blue-700 text-white rounded font-medium ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
