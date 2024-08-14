import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center py-2 mb-12 px-6">
      <div>
        <Link
          to="/login"
          className="px-4 py-2 text-gray-200 rounded-md hover:text-white hover:bg-gray-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="ml-4 px-4 py-2 text-gray-200 rounded-md hover:text-white hover:bg-gray-700 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
