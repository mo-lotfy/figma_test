import React from "react";

const Card = ({ customSize = "", title = "Default", desc = null, callToActionBTN = null, exClassName, img, altDesc = null }) => {
  return (
    <div className={`p-4 ${customSize}`}>
      <div className={`flex content-center items-center flex-col p-4 rounded-md overflow-hidden shadow-lg w-full h-full ${exClassName} `}>
        <div className="flex flex-row">
          <div className="flex flex-col items-start justify-center h-full">
            <a href="/#">{title}</a>
            {desc && desc}
            {callToActionBTN && (
              <button
                size="large"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                {callToActionBTN}
              </button>
            )}
          </div>
          {img}
        </div>
        {altDesc}
      </div>
    </div>
  );
};

export default Card;
