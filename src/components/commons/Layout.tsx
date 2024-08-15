import Navbar from "./Navbar";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen bg-black text-white p-6 overflow-scroll">
      <Navbar />
      <div className="max-w-2xl mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
