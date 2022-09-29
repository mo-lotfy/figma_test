import React from "react";
import { GiElectric, GiStoneWheel } from "react-icons/gi";
import { FaArrowsAltV } from "react-icons/fa";
import { BsFillDropletFill } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

let GetIcon = (key) => {
  switch (key) {
    case "Energy":
      return <GiElectric size={25} className="text-white" />;
    case "Range":
      return <FaArrowsAltV size={25} />;
    case "Break fluid":
      return <BsFillDropletFill size={25} />;
    case "Tire Wear":
      return <GiStoneWheel size={25} />;
    default:
      return <GiElectric size={25} />;
  }
};

const StatisticsCard = ({
  name = "Default",
  exClassName,
  strokeColor = "dark",
  percent = 10,
  unStrocked = "#eee",
  color = "text-gray-900",
  iconCircle = "bg-gray-100",
}) => {
  return (
    <div className={`p-4 w-full sm:w-1/2 md:w-1/2 xl:w-1/4`}>
      <div className={`flex content-center items-center flex-col p-4 rounded-md overflow-hidden shadow-lg ${exClassName} `}>
        <span className={`rounded-full flex bg-gray w-2 h-2 mb-2 custom-circle ${iconCircle}`} style={{ color: strokeColor }}>
          {GetIcon(name)}
        </span>
        <h5 className={`my-8 text-2xl font-bold tracking-tight ${color}`}>{name}</h5>
        <div className="flex content-center items-center" style={{ width: "50%" }}>
          <CircularProgressbar
            value={percent}
            text={`${percent}%`}
            strokeWidth={12}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.5,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "16px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: strokeColor,
              textColor: strokeColor,
              trailColor: unStrocked,
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
