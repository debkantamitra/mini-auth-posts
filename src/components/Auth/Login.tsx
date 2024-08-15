import AuthFormWrapper from "./AuthFormWrapper";
import TextInput from "../commons/TextInput";

interface Props {
  handleFormSwitch?: () => void;
  onCloseModal?: () => void;
}

const Login = ({ handleFormSwitch, onCloseModal }: Props) => {
  return (
    <AuthFormWrapper
      title="WELCOME BACK"
      buttonText="Login now"
      linkText="Register"
      linkHref="/register"
      linkDescription="Not registered yet?"
      subTitle="Log into your account"
      onSubmit={() => {}}
      onButtonClick={() => alert("Signing in..")}
      handleFormSwitch={handleFormSwitch}
      onCloseModal={onCloseModal}
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
          isLogin
        />
      </>
    </AuthFormWrapper>
  );
};

export default Login;
