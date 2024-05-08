import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

type Props = {};
const Toggle = (props: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <SunIcon />
      <div className="w-8 h-5 bg-purple rounded-2xl flex justify-end items-center px-1">
        <div className="bg-white w-3 h-3 rounded-full"></div>
      </div>
      <MoonIcon />
    </div>
  );
};
export default Toggle;
