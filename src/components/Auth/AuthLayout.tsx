interface Props {
  children: JSX.Element;
  hasLogo?: boolean;
}

const AuthLayout = ({ children, hasLogo }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black space-y-10">
      {children}
    </div>
  );
};

export default AuthLayout;
