import React from "react";
import { CalendarDays } from "lucide-react";
import ImageCarousel from "@/components/ui/image-carousel";

interface PageProps {
  // Define your props here
}

const Page: React.FC<PageProps> = (props) => {
  // random image urls
  const imageUrls = [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1502136969935-8d47b6b02a3c",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  ];

  return (
    <main className="flex flex-col pt-11 px-8">
      <div>
        <svg
          width="12"
          height="19"
          viewBox="0 0 12 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0697 2.33189L9.47668 0.738892L0.476685 9.73889L9.47668 18.7389L11.0697 17.1459L3.66268 9.73889L11.0697 2.33189Z"
            fill="black"
          />
        </svg>
      </div>
      <div className=" flex items-center justify-end gap-2">
        <CalendarDays size={24} className="text-blue-200" />
        <p className="text-sm text-black">05/06/2024</p>
      </div>
      <div className="flex w-fit h-auto relative">
        <ImageCarousel imageUrls={imageUrls} />
      </div>
    </main>
  );
};

export default Page;
