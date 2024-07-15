import React from 'react'
import Image, { StaticImageData } from 'next/image' 
import PropertyCard from '../../../components/PropertyCard'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';


interface AdInfo {
  id: number;
  PropertyName: string;
  Location: string;
  Price: number;
  PropertyType: string;
}

function ViewAd() {
  const adsInfo: AdInfo[] = [
    { id: 2,PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 3,PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Houses' },
    { id: 4,PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Bungalows' },
    { id: 5,PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 6,PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Flats' },
    { id: 7,PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 8,PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 9,PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 1,PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
  ]

  return (
    <div className='bg-white-100 p-4 m-3 '  >
      <div className='flex  items-center justify-between ' >
        <button>
          <ArrowBackIosNewIcon sx={{color:'#3B53AD' }} />
        </button>
          <NotificationsIcon sx={{color:'#3B53AD' }}/>
      </div>
      <div className=' flex justify-between  mt-4' >
        <h1>Ads ({adsInfo.length})</h1>
        <ListIcon sx={{color:'#3B53AD' }} />
      </div>
    <div>
      {adsInfo.map((info) => (
        <PropertyCard
          key={info.id}
          PropertyName={info.PropertyName}
          Location={info.Location}
          Price={info.Price}
          PropertyType={info.PropertyType}
        />
      ))}
    </div>
    </div>
  )
}

export default ViewAd
