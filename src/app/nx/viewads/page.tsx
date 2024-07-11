import React from 'react'
import Image from 'next/image';
import { FaMapMarkerAlt, FaDollarSign, FaEdit, FaTrashAlt } from 'react-icons/fa';

const PropertyCard = () => {
  return (
    <div className="flex items-center p-4 bg-white rounded shadow-lg">
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src="public/viewads.png" 
          alt="View Ad Image"
          className="rounded"
          layout="fill"
          objectFit="cover"
        />
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">Property Name</h3>
        <div className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2" />
          <span>Location</span>
        </div>
        <div className="flex items-center text-gray-600 mt-1">
          <FaDollarSign className="mr-2" />
          <span>Price</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="p-2 text-blue-500 hover:bg-blue-100 rounded">
          <FaEdit />
        </button>
        <button className="p-2 text-red-500 hover:bg-red-100 rounded">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

  )
}

export default ViewAds