type ButtonType = "button" | "submit" | "reset";

interface Props {
  type: ButtonType;
  text: string;
  onClick: () => void;
}

const Button = ({ type, text, onClick }: Props) => {
  return (
    <button
      type={type}
      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-4"
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
