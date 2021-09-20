import SignupForm from "./SignupForm";

const SignupPage = () => {

  const submit = () => {
    console.log("submit");
  };

  return (
    <div>
      <div>
        <SignupForm submit={submit} />
      </div>
    </div>
  );
};

export default SignupPage;