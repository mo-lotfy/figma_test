import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { RiRepeatLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

const CarCardList = ({ car: { id, name, brand, price, users } }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row w-full hover:bg-gray-100 mb-6 ">
      <img
        className="object-contain w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-3"
        src={`./cars/${id % 2}.svg`}
        alt={`cars id ${id}`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <div className="text-xl font-bold flex justify-between ">
          {name}
          <button
            type="button"
            onClick={() => setIsFav(!isFav)}
            className={`
              ${
                isFav
                  ? "text-gray-100 bg-red-600 hover:bg-red-700 hover:red-700 focus:ring-4 focus:outline-none focus:ring-red-300 "
                  : "text-gray-400 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 "
              }
              font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center`}
          >
            <AiOutlineHeart size={20} />
          </button>
        </div>
        {/* <span className="text-lg text-gray-500 font-thin mb-2">{brand}</span> */}
        <p className="mb-3 text-lg font-normal text-gray-500">{brand}</p>
        <div className="p-2 w-full mt-4">
          <div className="grid grid-cols-3 gap-3 ">
            <div className="text-gray-700 text-base flex content-center items-center">
              <BiUser size={20} className="text-purple-500 mx-1" /> <span className="font-normal">{users}</span>
            </div>
            <div className=" text-gray-700 text-base flex content-center items-center">
              <RiRepeatLine size={20} className="text-purple-500 mx-1" /> Manual
            </div>
            <div className=" text-gray-700 text-base font-bold text-end">
              ${price}
              <span className="text-gray-400 font-normal">/d</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CarCardList;
