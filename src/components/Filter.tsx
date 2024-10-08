import { MenuItem, Select } from "@mui/material";
import { Regions } from "../enum/Filter";
import { ComponentBaseProps } from "../App";

interface FilterProps extends ComponentBaseProps {
  filterValue?: string;
}

export const Filter = ({ darkMode }: FilterProps) => {
  return (
    <div className="w-1/6">
      <Select
        className={`w-full focus:outline-none ${darkMode ? "bg-blue-dark text-white" : "bg-white text-black"}`}
        inputProps={{
          className: `w-full focus:outline-none ${darkMode ? "bg-blue-dark text-white" : "bg-white text-black"}`,
        }}
        MenuProps={{
          MenuListProps: {
            className: `w-full focus:outline-none ${darkMode ? "bg-blue-dark text-white" : "bg-white text-black"}`,
          },
        }}
        defaultValue={"none"}
      >
        <MenuItem value={"none"}>Filter by Region</MenuItem>
        {Object.entries(Regions).map(([key, value]) => {
          return <MenuItem value={key}>{value}</MenuItem>;
        })}
      </Select>
    </div>
  );
};
