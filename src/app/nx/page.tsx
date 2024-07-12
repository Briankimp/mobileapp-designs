"use client";

import React, { useState, useRef, useEffect } from "react";
import { CircleUserRound, Search, Logs } from "lucide-react";
import FilterButtons from "@/components/FilterButtons";
import ListingCard from "@/components/ListingCard";
import SearchFilterDrawer from "@/components/drawers/SearchFilterDrawer";

const HomePage = () => {
  const [hasFilters, setHasFilters] = useState(false);
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);
  const containerRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(
    null
  );

  const toggleFilterDrawer = () => {
    setOpenFilterDrawer(!openFilterDrawer);
  };

  return (
    <div
      ref={containerRef as any}
      className="flex flex-col pt-11 px-8 w-full bg-white-100"
      style={{ position: "relative" }}
    >
      <div className="flex flex-row justify-between py-2">
        <Search color="black" onClick={toggleFilterDrawer} />
        {/* {isSigned && 
        <Logs color="black" />} */}
      </div>

      {hasFilters && (
        <div className="my-5">
          <FilterButtons />
        </div>
      )}

      <div className="flex flex-col gap-5">
        <ListingCard />
        <ListingCard />
        <ListingCard />
        {/* Add more ListingCard components as needed */}
      </div>

      <SearchFilterDrawer
        open={openFilterDrawer}
        setOpen={setOpenFilterDrawer}
        containerRef={containerRef as any}
      />
    </div>
  );
};

export default HomePage;
