import React from "react";
import { CalendarDays, MapPin, Wifi } from "lucide-react";
import ImageCarousel from "@/components/ui/image-carousel";
import { ChevronLeft, Cable, Droplets, Utensils, MessageSquareMore, Eye, Bath, Heart, Share2, UsersRound, Images, BedDouble } from "lucide-react";
import Image from "next/image";
import { Divider } from "antd";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import WhatsappIcon from "@/components/ui/WhatsappIcon";


interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  // random image urls
  const imageUrls = [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1502136969935-8d47b6b02a3c",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  ];

  return (
    <main className="flex flex-col pt-11 px-8 w-full bg-white-100">
      <div>
        <ChevronLeft />
      </div>
      <div className=" flex items-center justify-end gap-2">
        <CalendarDays size={24} className="text-blue-200" />
        <p className="text-sm text-black">05/06/2024</p>
      </div>
      <div className="relative mt-10 justify-center items-center">
        <img 
          src="https://i.pinimg.com/236x/68/58/e0/6858e0446ac801dbdc950befd2efb8af.jpg" 
          alt="property picture" 
          className="w-[800px] h-[300px] self-center "
         />
        <div className="bg-blue-200 h-[38.45px] w-[38.45px] absolute rounded-[100px] bottom-[50px] right-[40px] justify-center items-center">
          <Images size={20} color="white" className="self-center"/>
        </div>
        <div className="bg-black h-[25.1px] w-[57.27px] absolute rounded-[100px] bottom-[50px] left-[30px] flex justify-center items-center">
          <p className="text-white-100 self-center">1/10</p>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-[20px]">
        <h2 className="flex w-[217px] h-[38px] flex-wrap text-md font-semibold">Property Name in one line or maybe two</h2>
        <button className="flex flex-row bg-blue-200 w-[133px] h-[34] items-center justify-center text-white-100 rounded-[4.32px]"><MessageSquareMore color="white" /> Message</button>
      </div>

      <div className="flex flex-row justify-between mt-[20px]">
        <div className="flex flex-row gap-4">
          <Eye />
          <h4>1</h4>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2">
            <p>8</p>
            <Heart />
          </div>
          <Share2 />
        </div>
      </div>

      <div className="flex flex-row justify-between mt-[20px]">
        <div className="flex flex-col">
          <p>Guest</p>
          <div className="flex flex-row gap-2">
            <UsersRound />
            <p>2</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Bedroom</p>
          <div className="flex flex-row gap-2">
            <BedDouble />
            <p>2</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Bed</p>
          <div className="flex flex-row gap-2">
            <BedDouble />
            <p>2</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Bathroom</p>
          <div className="flex flex-row gap-2">
          <Bath />
            <p>2</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Kitchen</p>
          <div className="flex flex-row gap-2">
            <Utensils />
            <p>2</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-[20px]">
        <div>
          <p className="font-medium text-xs text-gray text-opacity-0">Property Type</p>
          <p className="font-medium text-sm">Apartment</p>
        </div>
        <div>
          <p className="font-medium text-xs text-gray text-opacity-0">Uploaded By:</p>
          <p className="font-medium text-sm">Landlord's Name</p>
        </div>
        <button className="flex rounded-[90px] flex-row bg-green-100 w-[133px] h-[34] items-center justify-center text-white gap-3 text-black">
          <MapPin color="black"/>
          Distance
        </button>
      </div>

      <div className="flex flex-row justify-start mt-[20px]">
        <MapPin/>
        <p>Address with house no., lane no.</p>
      </div>

      <div className=" my-[20px]">
        <Divider className="h-[1px] bg-black text-opacity-0"/>
      </div>

      <div className=" my-[20px]">
        <p>Preferences</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Totam sapiente ipsam nobis accusamus blanditiis, magni labore
            aperiam voluptatibus, sit velit dignissimos 
          veniam optio reprehenderit quidem iure impedit, ducimus quae cum?
        </p>
      </div>

      <div className="flex flex-col justify-start items-start gap-6  my-[20px]">
        <p>Amenities</p>
        <div className="flex flex-row gap-3">
          <Droplets />
          <p>Water</p>
        </div>
        <div className="flex flex-row gap-3">
          <Cable />
          <p>Electricity</p>
        </div>
        <div className="flex flex-row gap-3">
          <Droplets />
          <p>Caretaker</p>
        </div>
        <div className="flex flex-row gap-3">
          <Utensils />
          <p>Kitchen</p>
        </div>
        <div className="flex flex-row gap-3">
          <Wifi />
          <p>Wifi</p>
        </div>
      </div>

      <div className="flex mt-[20px] relative">
        <Fab color="primary" aria-label="add" className="absolute z-1 top-0 right-0 ">
          <AddIcon />
        </Fab>
        <div className="flex flex-col">
          <p className="">You can add questions here:</p>
          <input 
            type="text" 
            placeholder="Ask a question"
            className="my-5 rounded-[4px] border-[1px] border-gray-300 px-[8px] w-[366px] h-[31px]"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mb-44">
        <button
          className="bg-blue-200 w-[308px] h-[51px] text-white-100 rounded-[7px]"
        >SUBMIT YOUR QUESTIONS</button>
      </div>

      <div className="flex px-8 flex-col fixed -bottom-5 left-0 right-3 my-20 rounded-[7px] w-full h-[90px] ">
        <div className="flex items-center justify-end mb-2">
          <Fab className="bg-green-400 mb-2">
            <WhatsappIcon/>
          </Fab>
        </div>
        <div className="flex z-10 flex-row justify-between bg-white-100 w-full mt-4">
          <div className="flex flex-col">
            <p>$ xxxx</p>
            <p>Excluding Taxes</p>
          </div>
          <button className="bg-blue-200 w-[189px] h-[51px] rounded-[7px] text-white-100">BOOK NOW</button>
        </div>
      </div>

    </main>
  );
};

export default Page;
