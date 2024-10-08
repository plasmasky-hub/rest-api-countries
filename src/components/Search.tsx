// import { ComponentBaseProps } from "../App";
import SearchIcon from "@mui/icons-material/Search";
import { ComponentBaseProps } from "../App";

interface SearchProps extends ComponentBaseProps {
  text?: string;
}

export const Search = ({ darkMode }: SearchProps) => {
  return (
    <div
      className={`w-1/3 h-12 px-5 shadow-light rounded-md flex items-center gap-4 ${darkMode ? "bg-blue-dark" : "bg-white"}`}
    >
      <SearchIcon />
      <input
        placeholder="Search for a country..."
        className={`w-full focus:outline-none ${darkMode ? "bg-blue-dark" : "bg-white"}`}
      ></input>
    </div>
  );
};
