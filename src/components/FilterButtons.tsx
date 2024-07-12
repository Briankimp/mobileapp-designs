import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TnCButton } from "./ui/button/button";

const FilterButtons = () => {
  return (
    <div className="flex items-center w-full h-fit flex-wrap overflow-hidden custom-scrollbar gap-2 p-1">
      <TnCButton
        variant="outline"
        className="text-black-100 text-sm cursor-default py-[4px!important] px-[4px!important] gap-[2px!important]"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        }}
      >
        Single Room
        <CloseIcon className="text-red-100 h-full w-aspect cursor-pointer" />
      </TnCButton>
    </div>
  );
};

export default FilterButtons;
