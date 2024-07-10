import React from 'react'
import Image from 'next/image'
import { BedDouble } from 'lucide-react'

const HorizontalScrollButtons = () => {
  return (
    <div className='flex flex-row justify-between'>
      <button className='flex gap-1 w-[134px] h-[35px] flex-row justify-center items-center p-4 rounded-[7px] border-[1px] border-blue-200 border-solid'>
        <BedDouble color="#3d53ad"/>
        <p className='text-sm font-normal'>Single Room</p>
      </button>
      <button className='flex gap-1 w-[134px] h-[35px] flex-row items-center border-[1px] p-4 rounded-[7px] border-blue-200 border-solid'>
        <BedDouble color="#3d53ad"/>
        <p className='text-sm font-normal'>Bedsitter</p>
      </button>
      <button className='flex gap-1 w-[134px] h-[35px] flex-row items-center border-[1px] p-4 rounded-[7px] border-blue-200 border-solid'>
        <BedDouble color="#3d53ad"/>
        <p className='text-sm font-normal'>1 bedroom</p>
      </button>
      <button className='flex gap-1 w-[134px] h-[35px] flex-row items-center border-[1px] p-4 rounded-[7px] border-blue-200 border-solid'>
        <BedDouble color="#3d53ad"/>
        <p className='text-sm font-normal'>2 bedroom</p>
      </button>
      <button className='flex gap-1 w-[134px] h-[35px] flex-row items-center border-[1px] p-4 rounded-[7px] border-blue-200 border-solid'>
        <BedDouble color="#3d53ad"/>
        <p className='text-sm font-normal'>3+ bedroom</p>
      </button>
    </div>
  ) 
}

export default HorizontalScrollButtons
