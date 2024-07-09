import React from "react";
import { CalendarDays, MapPin, Wifi } from "lucide-react";
import ImageCarousel from "@/components/ui/image-carousel";
import { ChevronLeft, Cable, Droplets, Utensils, MessageSquareMore, Eye, Bath, Heart, Share2, UsersRound, Images, BedDouble } from "lucide-react";
import Image from "next/image";
import { Divider } from "antd";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


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

      <div className="flex my-[20px] relative">
        <Fab color="primary" aria-label="add" className="absolute top-0 right-0">
          <AddIcon />
        </Fab>
        <div className="flex flex-col">
          <p className="">You can add questions here:</p>
          <input 
            type="text" 
            placeholder="Ask a question"
            className="my-20 border-[1px] border-gray-300 px-[8px] w-[366px] h-[31px]"
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          className="bg-blue-200 w-[308px] h-[51px] text-white-100 rounded-[7px]"
        >SUBMIT YOUR QUESTIONS</button>
      </div>

      <div className="flex my-20 rounded-[7px] w-[430px] h-[90px]">
        <div className="">
          <Fab className="bg-green-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_525_813)">
<path d="M20.1625 3.79105C17.9974 1.61436 15.1145 0.421814 12.0463 0.421814C5.72462 0.421814 0.572361 5.57408 0.572361 11.8957C0.572361 13.9219 1.10495 15.8902 2.10067 17.6269L0.479736 23.578L6.55825 21.9803C8.23708 22.8949 10.1243 23.3812 12.0463 23.3812C18.3679 23.3812 23.5202 18.229 23.5202 11.9073C23.5202 8.8391 22.3276 5.95615 20.1625 3.79105ZM12.0463 21.4361C10.3327 21.4361 8.65389 20.973 7.18347 20.1046L6.83612 19.8962L3.22375 20.8456L4.18473 17.3259L3.95317 16.9669C3.00377 15.4502 2.49433 13.6903 2.49433 11.8957C2.49433 6.63926 6.77823 2.35536 12.0347 2.35536C14.5819 2.35536 16.9786 3.35108 18.7732 5.15726C20.5793 6.96345 21.5635 9.36012 21.5635 11.9073C21.5866 17.1638 17.3027 21.4361 12.0463 21.4361ZM17.2796 14.304C16.9901 14.165 15.5776 13.4704 15.3229 13.3661C15.0566 13.2735 14.8713 13.2272 14.6745 13.5051C14.4777 13.7945 13.9335 14.4429 13.7714 14.6282C13.6093 14.825 13.4356 14.8481 13.1462 14.6976C12.8567 14.5587 11.9305 14.2461 10.8422 13.2735C9.98537 12.5094 9.41804 11.5715 9.24437 11.2821C9.08228 10.9926 9.22121 10.8421 9.37173 10.6916C9.49909 10.5642 9.66118 10.3558 9.80012 10.1937C9.93906 10.0316 9.99695 9.90429 10.0896 9.71904C10.1822 9.52221 10.1359 9.36012 10.0664 9.22118C9.99695 9.08224 9.41804 7.66971 9.18648 7.09081C8.95492 6.53506 8.71178 6.60453 8.53811 6.59295C8.36443 6.59295 8.17918 6.59295 7.98236 6.59295C7.78553 6.59295 7.4845 6.66242 7.2182 6.95187C6.96348 7.24132 6.22248 7.93601 6.22248 9.34854C6.22248 10.7611 7.25294 12.1273 7.39187 12.3125C7.53081 12.5094 9.41804 15.4039 12.2894 16.6428C12.9725 16.9438 13.5051 17.1175 13.9219 17.2448C14.605 17.4648 15.2303 17.4301 15.7281 17.3606C16.2839 17.2795 17.4301 16.6659 17.6617 15.9944C17.9048 15.3228 17.9048 14.7555 17.8238 14.6282C17.7427 14.5008 17.569 14.4429 17.2796 14.304Z" fill="white"/>
</g>
<defs>
<filter id="filter0_i_525_813" x="0.479736" y="0.421814" width="23.0404" height="24.1562" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_525_813"/>
</filter>
</defs>
</svg>

          </Fab>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <p>$ xxxx</p>
            <p>Excluding Taxes</p>
          </div>
          <button className="bg-blue-200 w-[189px] h-[51px]">BOOK NOW</button>
        </div>
      </div>

    </main>
  );
};

export default Page;
