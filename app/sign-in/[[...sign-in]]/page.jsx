import { SignIn } from "@clerk/nextjs";

const CustomSignIn = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
};
export default CustomSignIn;
