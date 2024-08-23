import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ hotel }) {
    const {photoUrl,setPhotoUrl}=useState();
  useEffect(()=>{
    hotel&&GetPlacePhoto();
  },[hotel])
  const GetPlacePhoto=async()=>{
    const data={
      textQuery:hotel?.HotelName
    };
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name);
      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }


  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel?.HotelName +
          hotel?.HotelAddress
        }
        target="_blank"
      >
        <div className="hover:scale-105 transition-all cursor-pointer">
          <img className="rounded-xl" src={photoUrl} />
          <div className="my-2 flex flex-col">
            <h2 className="font-medium ">{hotel?.HotelName}</h2>
            <h2 className="text-xs text-gray-500 ">📍{hotel?.HotelAddress}</h2>
            <h2 className="text-sm">💵{hotel?.Price} per night</h2>
            <h2 className="text-sm">⭐{hotel?.Rating}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HotelCardItem;
