import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ComponentBaseProps } from "../App";

interface HeaderProps extends ComponentBaseProps {
  onClick: () => void;
}

export const Header = ({ onClick, darkMode }: HeaderProps) => {
  return (
    <header className=" fixed bg-white dark:bg-blue-dark h-16 w-full px-2 mobile:px-3 desktop:px-16 flex justify-between items-center shadow-md">
      <a className="font-bold">
        <h1 className="text-lg">Where in the world?</h1>
      </a>
      <button onClick={onClick} className="flex gap-1">
        {darkMode ? <DarkModeIcon /> : <DarkModeOutlinedIcon />}
        <p>Dark Mode</p>
      </button>
    </header>
  );
};
