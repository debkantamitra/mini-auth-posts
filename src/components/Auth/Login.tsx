import AuthFormWrapper from "./AuthFormWrapper";
import TextInput from "../commons/TextInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthFormWrapper
      title="WELCOME BACK"
      buttonText="Login now"
      linkText="Register"
      linkHref="/register"
      linkDescription="Not registered yet?"
    >
      <>
        <TextInput
          label="Email or Username"
          type="text"
          placeholder="Enter your email or username"
          onChange={(value) => {
            console.log(value);
          }}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={(value) => {
            console.log(value);
          }}
        />
        <div className="text-right mt-1">
          <Link to="#" className="text-sm text-blue-500">
            Forgot password?
          </Link>
        </div>
      </>
    </AuthFormWrapper>
  );
};

export default Login;
