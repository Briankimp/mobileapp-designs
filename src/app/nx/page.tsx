import React from "react";
import { CircleUserRound, Search, Logs } from 'lucide-react';
import HorizontalScrollButtons from "@/components/ui/HorizontalScrollButtons";
import ListingCard from "@/components/ui/ListingCard";


const HomePage = () => {
  return (
    <>
      <div className="flex flex-col pt-11 px-8 w-full bg-white-100">

        <div className="">
          <CircleUserRound />
        </div>

        <div className="my-11 flex flex-row justify-between">
          <Search color="black"/>
          <Logs color="black"/>
        </div>

        <div>
          <HorizontalScrollButtons/>
        </div>

        <div className="my-4 flex flex-col bg-white-100">
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
          <ListingCard/>
        </div>

      </div>
    </>
  );
};

export default HomePage;
