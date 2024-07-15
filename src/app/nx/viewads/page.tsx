import React from 'react'
import PropertyCard from '../../../components/PropertyCard'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';


interface AdInfo {
  ImageSrc: string;
  id: number;
  PropertyName: string;
  Location: string;
  Price: number;
  PropertyType: string;
}

function ViewAd() {
  const adsInfo: AdInfo[] = [
    { id: 2,ImageSrc:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 3,ImageSrc:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Houses' },
    { id: 4,ImageSrc:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Bungalows' },
    { id: 5,ImageSrc:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 6,ImageSrc:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Flats' },
    { id: 7,ImageSrc:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 8,ImageSrc:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 9,ImageSrc:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
    { id: 1,ImageSrc:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',PropertyName: ' Ecclessia Flats Muranga Town Koinange', Location: "Murang'a Town Manyeki Road", Price: 20000, PropertyType: 'Villas' },
  ]

  return (
      <div className='bg-white-100 p-4 m-3'>
        <div className='flex items-center justify-between text-blue-200 text-lg'>
          <button>
            <div className='w-6 h-6'>
              <ArrowBackIosNewIcon className='w-full h-full' />
            </div>
          </button>
          <div className='w-6 h-6'>
            <NotificationsIcon className='w-full h-full' />
          </div>
        </div>
        <div className=' flex justify-between font-semibold text-lg mt-5' >
          <h1>Ads ({adsInfo.length})</h1>
          <div className=' text-blue-200'>
            <ListIcon />
          </div>
        </div>
        <div>
          {adsInfo.map((info) => (
          <PropertyCard
          key={info.id}
          ImageSrc={info.ImageSrc}
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
