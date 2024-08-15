import TextInput from "../commons/TextInput";
import AuthFormWrapper from "./AuthFormWrapper";

interface Props {
  handleFormSwitch?: () => void;
  onCloseModal?: () => void;
}

const Register = ({ handleFormSwitch, onCloseModal }: Props) => {
  return (
    <AuthFormWrapper
      title="SIGN UP"
      buttonText="Continue"
      linkText="Login"
      linkHref="/login"
      linkDescription="Already have an account?"
      subTitle="Create an account to continue"
      onSubmit={() => {}}
      onButtonClick={() => alert("Signing Up..")}
      handleFormSwitch={handleFormSwitch}
      onCloseModal={onCloseModal}
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
