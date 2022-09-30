import React from "react";

const Card = ({ customSize = "", title = "Default", desc = null, callToActionBTN = null, exClassName, img, altDesc = null }) => {
  return (
    <div className={`p-4 ${customSize}`}>
      <div className={`flex content-center items-start justify-center flex-col p-6 rounded-md overflow-hidden shadow-lg w-full h-full ${exClassName} `}>
        <div className="flex flex-row content-center items-center w-full sm:justify-center xl:justify-between">
          <div className="flex flex-col sm:items-center md:items-start justify-center w-full sm:w-2/5">
            <h2>{title}</h2>
            {desc && desc}
            {callToActionBTN && (
              <button
                size="large"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
              >
                {callToActionBTN}
              </button>
            )}
          </div>
          <div className="flex sm:items-center md:items-end justify-center h-100 w-full md:w-3/5">{img}</div>
        </div>
        {altDesc}
      </div>
    </div>
  );
};

export default Card;
