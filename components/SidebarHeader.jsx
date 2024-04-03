import { RiOpenaiFill } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";
const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <RiOpenaiFill className="h-10 w-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary">ChatGPT</h2>
      <ThemeToggle />
    </div>
  );
};
export default SidebarHeader;
