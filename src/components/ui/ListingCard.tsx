import React from 'react'
import { Card } from 'antd';
import { User, MapPin, CalendarDays } from 'lucide-react';
import Image from "next/image";

const ListingCard = () => {
  return (
    <div className='flex flex-col my-10'>
        <div className='flex mb-2'>
        <h2 className='font-semibold text-base flex-wrap'>Property Name in one line or maybe two</h2>
        </div>
        <div className='flex flex-row items-center justify-between my-2'>
            <div className='flex flex-row gap-3'>
                <MapPin color='#3d53ad'/>
                <p className='text-gray-800'>Address with house no., lane no</p>
            </div>
            <div className='flex flex-row gap-3'>
                <CalendarDays color='#3d53ad'/>
                <p className='text-gray-800'>05/06/2024</p>
            </div>
        </div>
        <div className='flex '>
            <Image
                src='https://i.pinimg.com/236x/1a/4d/e2/1a4de2e5b35f4259313a5a2d16e08a00.jpg'
                className="h-auto w-full object-cover rounded-[14px]"
                layout="responsive"
                width={366}
                height={50}
                alt=''
            />
        </div>
        <div className='flex flex-row items-end justify-between mt-3'>
            <div className='flex flex-col gap-2'>
                <p className='text-gray-500 font-normal text-xs'>Uploaded By:</p>
                <div className='flex flex-row gap-4'>
                    <User color='#3d53ad' size={20}/>
                    <p className='font-normal text-md'>Landload's Name</p>
                </div>
            </div>
            <p>KES 30, 000</p>
        </div>
    </div>
  )
}

export default ListingCard
