
"use client";

import React from 'react';
import { Carousel } from 'antd';

interface ImageCarouselProps{
  imageUrls: string[]
}

const App: React.FC<ImageCarouselProps> = ({ imageUrls }) => (
  <Carousel effect="fade">
    {imageUrls.map((url, index)=>(
      <div key={index} className='h-[200px] w-366px bg-gray-800 flex items-center justify-center'>
        <img src={url} alt={`Slide ${index + 1}`} className='h-full w-full object-cover' />
      </div>
    ))}
  </Carousel>
);

export default App;