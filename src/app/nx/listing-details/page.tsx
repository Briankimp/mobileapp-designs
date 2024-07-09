import React from "react";
import { CalendarDays } from "lucide-react";
import ImageCarousel from "@/components/ui/image-carousel";
import { ChevronLeft } from "lucide-react";

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
    <main className="flex flex-col pt-11 px-8 w-full">
      <div>
        <ChevronLeft />
      </div>
      <div className=" flex items-center justify-end gap-2">
        <CalendarDays size={24} className="text-blue-200" />
        <p className="text-sm text-black">05/06/2024</p>
      </div>
      <div className="mt-10">
        <ImageCarousel imageUrls={imageUrls} />
      </div>
    </main>
  );
};

export default Page;
