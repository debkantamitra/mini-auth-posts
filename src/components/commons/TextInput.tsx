type TextInputType = "text" | "email" | "password";

interface Props {
  label: string;
  type: TextInputType;
  placeholder: string;
  onChange?: (value: string) => void;
}

const TextInput = ({ label, type, placeholder, onChange }: Props) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-400">{label}</label>
      <input
        className="w-full p-2 mt-1 text-black rounded bg-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
