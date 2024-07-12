import React, { useState, useEffect } from "react";
import { Drawer, Button } from "@mui/material";
import { styled } from "@mui/system";
import { TnCButton } from "@/components/ui/button/button";
import { ChevronsLeft, ChevronRight } from "lucide-react";
import { Input, InputLabel, FormControl, FormHelperText } from "@mui/material";
import { Search } from "lucide-react";
import ListingCategoriesModal from "../modals/ListingCategoriesModal";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { numberWithCommas } from "@/utils/helper-functions";
import { Info } from "lucide-react";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    position: "absolute",
    width: "90%",
    height: "100vh",
  },
}));

const SearchFilterDrawer = ({
  open,
  setOpen,
  containerRef,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  containerRef: React.MutableRefObject<HTMLDivElement> | null;
}) => {
  const [placeFilter, setPlaceFilter] = useState("");
  const [openCategoriesModal, setOpenCategoriesModal] = useState(false);
  const [price, setPrice] = React.useState<number[]>([2000, 10000]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!containerRef) {
    return null;
  }

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
    console.log(price);
  };

  function valuetext(value: number) {
    return `Ksh ${numberWithCommas(
      parseInt(price[0].toString())
    )} - Ksh ${numberWithCommas(parseInt(price[1].toString()))}`;
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <CustomDrawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      container={containerRef.current}
      variant="temporary"
      style={{
        position: "absolute",
        padding: "0",
      }}
    >
      <ListingCategoriesModal
        open={openCategoriesModal}
        onClose={() => setOpenCategoriesModal(!openCategoriesModal)}
      />
      <div className="py-11 px-8 h-full flex flex-col items-start gap-5">
        <TnCButton
          variant="normal"
          className="px-0 py-0 sm:w-8 sm:h-8"
          customSize="icon"
          onClick={toggleDrawer}
        >
          <ChevronsLeft className=" text-black-100" />
        </TnCButton>
        <FormControl className="w-full flex flex-col gap-5">
          {/* <InputLabel htmlFor="place-filter">Email address</InputLabel> */}
          <div className="w-full border rounded border-blue-100/20 flex items-center">
            {/* <TnCButton
              variant="ghost"
              className="px-2 py-0 cursor-pointer z-50 h-full bg-green-100 rounded-none"
            >
              <Search className="h-4 w-4" />
            </TnCButton> */}
            <Input
              id="place-filter"
              value={placeFilter}
              onChange={(e) => setPlaceFilter(e.target.value)}
              // placeholder="Enter a property name or keyword e.g.'gated'"
              placeholder="Enter a property name, keyword or location"
              className="w-full z-40 border-none px-2 py-1 text-base font-thin"
            />
          </div>
          <div className="w-full h-40">
            <div className="w-full flex items-center gap-2">
              <h2 className="text-sm sm:text-base text-black-100 font-thin">
                Available locations
              </h2>
              <span className="text-black-100/40 text-xs font-thin ml-1">
                (Murang'a Town and its environs)
              </span>
              <Info className="h-4 w-4 text-black-100/40 cursor-pointer" />
            </div>
          </div>

          <TnCButton
            className="w-full bg-green-100/20 text-base text-black-100 font-thin flex justify-between px-4 py-2 rounded-md"
            variant="normal"
            onClick={() => setOpenCategoriesModal(!openCategoriesModal)}
          >
            <span>Choose Type or Category</span>
            <ChevronRight className="sm:w-8 sm:h-8 text-black-100 font-thin" />
          </TnCButton>

          <div className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-sm sm:text-base text-black-100 font-thin">
                Select Monthly Rent Price Range
                <span className="text-black-100/40 text-xs font-thin ml-1">
                  (Ksh)
                </span>
              </h2>
              <h2 className="text-sm sm:text-base text-black-100 font-thin">
                {numberWithCommas(price[0])} - {numberWithCommas(price[1])}
              </h2>
            </div>
            <Box sx={{ width: "100%" }}>
              <Slider
                aria-label="price-range"
                getAriaLabel={() => "Price Range"}
                value={price}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                sx={{
                  color: "#3B53AD",
                  height: "8px",
                  "& .MuiSlider-thumb": {
                    color: "#fff",
                    border: "2px solid #3B53AD",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#3B53AD",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#d8d8d8",
                  },
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: "#3B53AD",
                  },
                }}
                min={500}
                max={20000}
                step={100}
              />
            </Box>
          </div>
        </FormControl>
        <TnCButton className="w-full" variant="default" disabled={true}>
          Search
        </TnCButton>
      </div>
    </CustomDrawer>
  );
};

export default SearchFilterDrawer;
