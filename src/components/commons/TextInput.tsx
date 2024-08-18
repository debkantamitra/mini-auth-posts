import { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
      <div className="relative">
        <input
          className="w-full px-3 py-2 mt-2 placeholder:text-[#7F8084] rounded bg-transparent border border-[#35373B] focus:outline-none focus:ring-1 focus:ring-blue-600"
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-[19px] right-0 flex items-center pr-3 text-[#7F8084] hover:text-blue-500 focus:outline-none"
          >
            <img
              src={
                showPassword
                  ? "/assets/icons/eye-off.png"
                  : "/assets/icons/eye.svg"
              }
              alt="Toggle visibility"
              className="w-5 h-5"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
