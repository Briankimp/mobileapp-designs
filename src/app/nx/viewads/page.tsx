import React from 'react'
import Image from 'next/image'
import { DollarSign, MapPin } from 'lucide-react'
import adImage from '../../nx/images/adimage.png' 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ViewAd() {
  return (
    <div>
      <div className="flex items-center p-5 bg-white shadow-xl row-auto ">
        <div className='relative flex h-24 w-24 flex-shrink-0 bg-white'>
          <Image
            src={adImage}
            alt='Ad Image'
            width={100}
            height={100}
            className='rounded'
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <div className='p-3 ml-4 flex-grow'>
          <h1 className='text-lg text-black font-semibold'>Property Name in one or two lines</h1>
          <div className='flex text-black-100 mt-2'>
            <MapPin size={20} color="#3B53AD" strokeWidth={1.5} />
            <span className='ml-3'>Address with house no, lane no</span>
          </div>
          <div className='flex items-center text-black-100 '>
            <DollarSign size={20} color="#3B53AD" strokeWidth={2} />
            <span className='ml-3'>Price</span>
          </div>
          <div className = 'items-end '>
            <button className="p-2 text-black-900 ' hover:bg-blue-100 rounded">
              <EditIcon sx={{color:'#3B53AD' }}/>
              <span className='ml-2 ' >Edit</span>
            </button>
            <button className="p-2 hover:bg-red-100 rounded">
                <DeleteIcon sx={{color:'#3B53AD' }} />
                <span className=' text-grey-100 ' >Delete</span>
            </button>
          </div>         
        </div>
      </div>
    </div>

  )
}

export default ViewAd
