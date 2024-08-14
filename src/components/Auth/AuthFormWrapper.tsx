import { Link } from "react-router-dom";

interface Props {
  title: string;
  children: JSX.Element;
  buttonText: string;
  linkText: string;
  linkHref: string;
  linkDescription: string;
}

const AuthFormWrapper = ({
  title,
  children,
  buttonText,
  linkText,
  linkHref,
  linkDescription,
}: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white rounded-lg p-8 shadow-md w-96">
        <div className="text-center mb-6">
          <span className="text-gray-500">{title}</span>
        </div>
        <form action="/">
          {children}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-4"
          >
            {buttonText}
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to={linkHref} className="text-sm text-gray-400">
            {linkDescription} <span className="text-blue-500">{linkText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthFormWrapper;
