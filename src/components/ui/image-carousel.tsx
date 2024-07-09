import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

interface ImageCarouselProps {
  imageUrls: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {
  return (
    <>
      <Carousel arrows infinite={false} className="flex">
        {props.imageUrls.map((url) => (
          <div key={url}>
            <Image src={url} alt="carousel image" width={366} height={200} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
