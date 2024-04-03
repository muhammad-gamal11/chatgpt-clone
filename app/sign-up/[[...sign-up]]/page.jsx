import { SignUp } from "@clerk/nextjs";

const CustomSignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};
export default CustomSignUp;
