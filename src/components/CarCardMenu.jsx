import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { RiRepeatLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

const CarCardMenu = ({ car: { id, name, brand, price, users } }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className={`p-2 w-full sm:w-1/2 md:w-1/2 xl:w-1/3`}>
      <div className=" p-4 rounded-2xl overflow-hidden bg-white ">
        <div className=" ">
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
          <p className="mb-3 text-lg font-normal text-gray-500">{brand}</p>
        </div>
        <img className="w-full" src={`./cars/${id % 2}.svg`} alt={`cars id ${id}`} />
        <div className="p-2 w-full mt-4">
          <div className="grid grid-cols-4 gap-4 ">
            <div className="text-gray-700 text-base flex content-center items-center">
              <BiUser size={20} className="text-purple-500 mx-1" /> <span className="font-normal">{users}</span>
            </div>
            <div className="col-span-2 text-gray-700 text-base flex content-center items-center">
              <RiRepeatLine size={20} className="text-purple-500 mx-1" /> Manual
            </div>
            <div className=" text-gray-700 text-base font-bold text-end">
              ${price}
              <span className="text-gray-400 font-normal">/d</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCardMenu;
