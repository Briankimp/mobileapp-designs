import React from 'react';
import Image from 'next/image';
import { MapPin, DollarSign } from 'lucide-react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface PropertyCardProps {
  PropertyName: string;
  ImageSrc: string;
  Location: string;
  Price: number;
  PropertyType: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ImageSrc,PropertyName, Location, Price,PropertyType,}) => {
  return (
    <div className= 'my-2'>
      <div className="flex items-center p-2 bg-white rounded">
        <div className="relative w-30 h-30 flex-shrink-0 flex">
          <Image
            src={ImageSrc}
            alt="Property"
            height={100}
            width={100}
            className="rounded"
          />
          <span className="absolute bottom-0 -right-2  bg-green-500  w-4 h-4 rounded-full border-4 border-white-100 "></span>
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold">{PropertyName}</h3>
          <div className="flex items-center text-blue-200 ">
            <MapPin size={17} absoluteStrokeWidth />
            <span className='text-black-100'>{Location}</span>
          </div>
          <div className="flex items-center text-blue-200 text mt-1">
            <DollarSign size={20} absoluteStrokeWidth />
            <span>{Price}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-0">
        <h1 className='font-semibold  items-center pl-2 ' >{PropertyType}</h1>
        <div className="flex  items-center">
          <button className="mr-3 hover:bg-blue-100 text-blue-200 rounded">
            <EditIcon />
            <span className='text-black-100'>Edit</span>
          </button>
          <button className=" mr-3 hover:bg-blue-100 text-blue-200 rounded">
            <DeleteIcon />
            <span className='text-grey-100' >Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
