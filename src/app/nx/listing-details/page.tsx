import React from "react";
import { CalendarDays, Wifi } from "lucide-react";
import ImageCarousel from "@/components/ui/carousel/image-details-carousel";
import {
  ChevronLeft,
  Utensils,
  MessageSquareMore,
  Eye,
  Bath,
  Heart,
  UsersRound,
  BedDouble,
  PersonStanding,
  Info,
} from "lucide-react";
import ShareIcon from "@mui/icons-material/Share";
import PlaceIcon from "@mui/icons-material/Place";
import { Divider } from "antd";
import WhatsappIcon from "@/assets/icons/WhatsappIcon";
import CaretakerIcon from "@/assets/icons/CaretakerIcon";
import ElectricityIcon from "@/assets/icons/ElectricityIcon";
import WaterIcon from "@/assets/icons/WaterIcon";
import KitchenIcon from "@/assets/icons/KitchenIcon";
import { TnCButton } from "@/components/ui/button/button";

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
  ];

  return (
    <main className="flex flex-col pt-11 px-8 w-full bg-white-100 relative">
      <div className="w-fit">
        <TnCButton variant="normal" className="p-0" customSize="icon">
          <ChevronLeft className="sm:w-8 sm:h-8 text-black-100" />
        </TnCButton>
      </div>

      <div className="flex items-center justify-end gap-2">
        <CalendarDays size={24} className="text-blue-200" />
        <p className="text-sm text-black-100">05/06/2024</p>
      </div>

      <div className="mt-5">
        <ImageCarousel imageUrls={imageUrls} />
      </div>

      <div className="column-flex-items-center w-full gap-5">
        <div className="w-full row-flex-justify-between mt-[20px]">
          <h2 className="text-base font-semibold">
            Property Name in one line or maybe two
          </h2>
          <TnCButton variant="default">
            <MessageSquareMore color="white" />
            <span>Message</span>
          </TnCButton>
        </div>

        <div className="w-full row-flex-justify-end gap-4">
          <div className="row-flex-justify-center gap-1">
            <Eye />
            <h4>1</h4>
          </div>
          <div className="row-flex-justify-center gap-1">
            <div className="flex flex-row gap-2 cursor-pointer">
              <Heart className="text-red-100" fill="#FFC1C1" />
              <p>8</p>
            </div>
          </div>
          <TnCButton variant="normal" className="p-0" customSize="icon">
            <ShareIcon className="text-blue-200" />
          </TnCButton>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col items-center">
            <p className="text-black-100/40 text-sm">Guest</p>
            <div className="flex flex-row gap-2">
              <UsersRound className="text-blue-200" />
              <p>2</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-black-100/40 text-sm">Bedroom</p>
            <div className="flex flex-row gap-2">
              <BedDouble className="text-blue-200" />
              <p>2</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-black-100/40 text-sm">Bed</p>
            <div className="flex flex-row gap-2">
              <BedDouble className="text-blue-200" />
              <p>2</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-black-100/40 text-sm">Bathroom</p>
            <div className="flex flex-row gap-2">
              <Bath className="text-blue-200" />
              <p>2</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-black-100/40 text-sm">Kitchen</p>
            <div className="flex flex-row gap-2">
              <Utensils className="text-blue-200" />
              <p>2</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <div>
            <p className="font-medium text-sm text-black-100/40">
              Property Type
            </p>
            <p className="font-medium text-sm text-black-100">Apartment</p>
          </div>
          <div>
            <p className="font-medium text-sm text-black-100/40">
              Uploaded By:
            </p>
            <p className="font-medium text-sm text-black-100">
              Landlord&apos;s Name
            </p>
          </div>
          <TnCButton
            variant="normal"
            className="bg-green-100 rounded text-black-100 row-flex-justify-center gap-2 px-3 py-2"
            customSize="icon"
          >
            <PlaceIcon className="h-6 w-6 text-blue-200" />
            Map
          </TnCButton>
        </div>
        <div className="w-full flex flex-row items-center justify-start">
          <PlaceIcon className="h-6 w-6 text-black-100" />
          <p className="font-medium text-base text-black-100">
            Address with house no., lane no.
          </p>
        </div>
      </div>

      <Divider className="h-[1px] bg-gray-400 text-opacity-0" />

      <div className="">
        <p className="text-black-100/40 text-sm font-normal">Description</p>
        <p className="font-medium text-base text-black-100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          sapiente ipsam nobis accusamus blanditiis, magni labore aperiam
          voluptatibus, sit velit dignissimos veniam optio reprehenderit quidem
          iure impedit, ducimus quae cum?
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 my-[20px]">
        <p className="col-span-3 text-black-100/40 text-sm font-normal">
          Amenities
        </p>
        <div className="flex flex-row gap-3">
          <WaterIcon />
          <p className="font-medium text-base text-black-100">Water</p>
        </div>
        <div className="flex flex-row gap-3">
          <ElectricityIcon />
          <p className="font-medium text-base text-black-100">Electricity</p>
        </div>
        <div className="flex flex-row gap-3">
          <PersonStanding color="#3d53ad" />
          <p className="font-medium text-base text-black-100">Caretaker</p>
        </div>
        <div className="flex flex-row gap-3">
          <CaretakerIcon />
          <p className="font-medium text-base text-black-100">Gateman</p>
        </div>
        <div className="flex flex-row gap-3">
          <KitchenIcon />
          <p className="font-medium text-base text-black-100">Kitchen</p>
        </div>
        <div className="flex flex-row gap-3">
          <Wifi color="#3d53ad" />
          <p className="font-medium text-base text-black-100">Wifi</p>
        </div>
      </div>

      <div className="flex flex-col w-full items-center mt-5 gap-3 mb-[130px]">
        <div className="w-full flex ">
          <div className="w-full flex flex-col gap-2">
            <div className="row-flex-justify-start">
              <p className="text-lg text-black-100">Ask a question </p>
              <Info className="text-black" />
            </div>
            <input
              type="text"
              placeholder="Question goes here"
              className="w-full p-3 rounded-[4px] border-[1px] border-gray-300
            focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200 text-black-100"
            />
          </div>
        </div>
        {/* <button className="bg-blue-200 w-[308px] h-[51px] text-white-100 rounded-[7px]"> */}
        <TnCButton variant="default" className="py-4 px-5" customSize="icon">
          SUBMIT YOUR QUESTION
        </TnCButton>
        {/* </button> */}
      </div>

      <div className="w-[100%] flex bg-red-100 py-5 px-8 gap-5 absolute bottom-0 left-0 mb-5">
        {/* <div className="flex items-center justify-end mb-2"></div> */}
        <div className="flex flex-row justify-start w-full gap-4">
          <div className="flex flex-col">
            <p className="text-base sm:text-lg font-normal whitespace-nowrap">
              Ksh 3000
            </p>
            <p className="text-lg sm:text-xl font-semibold">Deposit</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base sm:text-lg font-normal whitespace-nowrap">
              Ksh 3000
            </p>
            <p className="text-lg sm:text-xl font-semibold">Rent/Month</p>
          </div>
        </div>
        {/* <button className="bg-blue-200 w-[189px] h-[51px] rounded-[7px] text-white-100">
          BOOK NOW
        </button> */}
        <TnCButton variant="default" className="p-1 sm:p-2 w-40" customSize="icon">
          BOOK NOW
        </TnCButton>
      </div>
    </main>
  );
};

export default Page;
