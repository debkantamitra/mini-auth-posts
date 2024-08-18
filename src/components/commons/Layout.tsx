import Navbar from "./Navbar";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen bg-[#131319] text-white p-6 overflow-scroll">
      <Navbar />
      <div className="max-w-[700px] mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
