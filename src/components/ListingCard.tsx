import React from "react";
import { Card } from "antd";
import { User, CalendarDays } from "lucide-react";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "antd";

const imageUrls = [
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
];

const ListingCard = () => {
  return (
    // <Link>
    // </Link>
    <div
      className="w-full flex flex-col p-4 rounded-xl"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
    >
      <div className="flex mb-2">
        <h2 className="font-semibold text-sm sm:text-base text-black-100">
          Property Name in one line or maybe two
        </h2>
      </div>
      <div className="flex flex-row items-center justify-between my-2">
        <div className="flex flex-row gap-3">
          <PlaceIcon className="h-6 w-6 text-blue-200" />
          <p className="text-gray-800 text-xs sm:text-base">
            Address with house no., lane no
          </p>
        </div>
        <div className="flex flex-row items-center gap-1 sm:gap-3">
          <CalendarDays className="h-6 w-6 text-blue-200" />
          <p className="text-gray-800 text-xs sm:text-base">05/06/2024</p>
        </div>
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <Carousel autoplay>
          {imageUrls.map((url, index) => (
            <div className="relative w-full h-[200px] sm:h-[300px]" key={index}>
              <Image
                src={url}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover bg-white-100"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex flex-row items-end justify-between mt-3">
        <div className="flex flex-col gap-2">
          <p className="text-black-100/40 font-normal text-xs">Managed By:</p>
          <div className="flex flex-row items-center gap-2">
            <User className="h-6 w-6 text-blue-200" />
            <p className="font-normal text-md text-black-100">
              Landload&lsquo;s Name
            </p>
          </div>
        </div>
        <p className="text-sm text-black-100">KES 30, 000</p>
      </div>
    </div>
  );
};

export default ListingCard;
