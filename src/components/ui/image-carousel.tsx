"use client";

import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

interface ImageCarouselProps {
  imageUrls: string[];
}

const App: React.FC<ImageCarouselProps> = ({ imageUrls }) => (
  <Carousel>
    {imageUrls.map((url, index) => (
      <div key={index} className="max-w-[702px]">
        <Image
          src={url}
          alt={`Slide ${index + 1}`}
          className="h-auto w-full object-cover rounded-[14px]"
          layout="responsive"
          width={800}
          height={600}
        />
        {/* <h1> COUROSEL {index}</h1> */}
      </div>
    ))}
  </Carousel>
);

export default App;
