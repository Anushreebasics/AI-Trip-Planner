import React from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ hotel }) {
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
          <img className="rounded-xl" src="/placeholder.jpg" />
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
