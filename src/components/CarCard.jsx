import React from "react";
import { BiUser } from "react-icons/bi";
import { RiRepeatLine } from "react-icons/ri";

const CarCard = ({ car: { name, brand, price, users } }) => {
  return (
    <div className={`p-2 w-full sm:w-1/2 md:w-1/2 xl:w-1/4`}>
      <div className=" p-4 rounded-md overflow-hidden shadow-lg bg-white ">
        <div className=" ">
          <div className="text-xl mb-2 font-bold flex justify-between ">
            {name}
            {/* <Button shape="circle" className=" border-0 flex items-center justify-center" icon={<AiOutlineHeart size={25} />} size="large" /> */}
          </div>
          <p className="text-sm text-gray-700 font-thin">{brand}</p>
        </div>
        <img
          className="w-full"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMr-JhVx8D5NnNYxPs-Ef0OoUV_Bh0YNCY0prOxKeALY8kjRM4ukvFLWUMcG93C9TfbkNCO0luuV0MMN3VklXQPDOKqWenej6ogOuK0ZXSIiw0d1ViK8_k24wWKKdWi5clq9NYSr1AJ8dvw5nkewrGLQAZLtNGUBvihX746iSQjny4bi0k5bc9S8X5/s16000/Untitled%20design.png"
          alt="Sunset in the mountains"
        />
        <div className="p-2 w-full mt-4">
          <div className="grid grid-cols-4 gap-4 ">
            <div className="text-gray-700 text-base flex content-center items-center">
              <BiUser size={20} className="text-purple-500" /> <span className="font-normal">{users}</span>
            </div>
            <div className="col-span-2 text-gray-700 text-base flex content-center items-center">
              <RiRepeatLine size={20} className="text-purple-500" /> Manual
            </div>
            <div className=" text-gray-700 text-base font-bold">
              ${price}
              <span className="text-gray-400 font-normal">/d</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
