import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<boolean>;
};
const Toggle = ({ isDarkMode, setIsDarkMode }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <SunIcon isDarkMode={isDarkMode} />
      <div
        className={`w-8 h-5 bg-purple rounded-2xl flex items-center px-1 cursor-pointer ${
          isDarkMode ? "justify-end" : "justify-start"
        }`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <div className="bg-white w-3 h-3 rounded-full"></div>
      </div>
      <MoonIcon isDarkMode={isDarkMode} />
    </div>
  );
};
export default Toggle;
