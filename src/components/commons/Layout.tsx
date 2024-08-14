import Navbar from "./Navbar";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Navbar />
      <div className="max-w-2xl mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
