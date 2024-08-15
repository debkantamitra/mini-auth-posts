import { Link } from "react-router-dom";

type TextInputType = "text" | "email" | "password";

interface Props {
  label: string;
  type: TextInputType;
  placeholder: string;
  onChange?: (value: string) => void;
  isLogin?: boolean;
}

const TextInput = ({ label, type, placeholder, onChange, isLogin }: Props) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <label className="block text-sm font-medium text-[#C5C7CA]">
          {label}
        </label>
        {type === "password" && isLogin && (
          <label className="block text-sm font-medium text-[#C5C7CA]">
            <Link to="#" className="text-sm hover:text-blue-500">
              Forgot password?
            </Link>
          </label>
        )}
      </div>
      <input
        className="w-full px-3 py-2 mt-2 placeholder:text-[#7F8084] rounded bg-transparent border border-[#35373B] focus:outline-none focus:ring-1 focus:ring-blue-600"
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
