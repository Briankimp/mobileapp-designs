import React from 'react';
import Image from 'next/image';
import { MapPin, DollarSign } from 'lucide-react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface PropertyCardProps {
  PropertyName: string;
  Location: string;
  Price: number;
  PropertyType: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({PropertyName, Location, Price,PropertyType,}) => {
  return (
    <div className= ''>
      <div className="flex items-center p-2 bg-white rounded">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
            alt="Property"
            height={100}
            width={100}
            className="rounded"
          />
          <span className="absolute bottom-0 right-0 bg-green-500  w-4 h-4 rounded-full border-2 border-white"></span>
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold">{PropertyName}</h3>
          <div className="flex items-center text-black-100">
            <MapPin size={28} color="#3c2a98" absoluteStrokeWidth />
            <span>{Location}</span>
          </div>
          <div className="flex items-center text-black-100 mt-1">
            <DollarSign size={28} color="#3c2a98" absoluteStrokeWidth />
            <span>{Price}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-1">
        <h1 className='font-semibold items-center ' >{PropertyType}</h1>
        <div className="flex space-x-2">
          <button className="p-2 text-black-100 hover:bg-blue-100 rounded">
            <EditIcon sx={{ color: '#3B53AD' }} />
            <span>Edit</span>
          </button>
          <button className="p-2 text-grey-100 hover:bg-blue-100 rounded">
            <DeleteIcon sx={{ color: '#3B53AD' }} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
