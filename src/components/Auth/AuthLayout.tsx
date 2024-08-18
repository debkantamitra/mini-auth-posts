interface Props {
  children: JSX.Element;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#131319] space-y-12">
      <img src="/assets/icons/Logo.svg" alt="logo" />
      {children}
    </div>
  );
};

export default AuthLayout;
