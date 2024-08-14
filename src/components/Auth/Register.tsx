import TextInput from "../commons/TextInput";
import AuthFormWrapper from "./AuthFormWrapper";

const Register = () => {
  return (
    <AuthFormWrapper
      title="SIGN UP"
      buttonText="Continue"
      linkText="Login"
      linkHref="/login"
      linkDescription="Already have an account?"
    >
      <>
        <TextInput label="Email" type="email" placeholder="Enter your email" />
        <TextInput
          label="Username"
          type="text"
          placeholder="Choose a preferred username"
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Choose a strong password"
        />
      </>
    </AuthFormWrapper>
  );
};

export default Register;
