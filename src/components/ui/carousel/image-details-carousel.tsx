"use client";

import "./style.css";

import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { Images } from "lucide-react";

interface ImageCarouselProps {
  imageUrls: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageUrls }) => {
  return (
    <div className="relative max-w-[702px] rounded-[14px] overflow-hidden">
      <Carousel arrows>
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
      <button className="bg-blue-200 flex h-[38.45px] w-[38.45px] absolute rounded-full bottom-[20px] right-[20px] justify-center items-center">
        <Images size={20} color="white" className="self-center" />
      </button>
    </div>
  );
};

export default ImageCarousel;
