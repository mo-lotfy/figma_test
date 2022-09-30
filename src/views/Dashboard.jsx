import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import StatisticsCard from "../components/StatisticsCard";
import CarCardMenuColored from "../components/CarCardMenuColored";

const Dashboard = () => {
  const [cars, setCars] = useState([]);

  let getData = () => {
    fetch("./cars.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async function (response) {
        return await response.json();
      })
      .then(function (carsArray) {
        setCars(carsArray.slice(0, 3));
        return;
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-page-wrapper">
      <div className="flex flex-wrap -mx-4">
        <StatisticsCard
          name="Energy"
          exClassName="bg-purple-500 hover:bg-purple-600"
          percent={45}
          colorClassName="text-white"
          iconCircle="bg-purple-400"
          unStrocked="#B37EFC"
          strokeColor="#fff"
          bgStrokeColor="#A66FF0"
        />
        <StatisticsCard
          name="Range"
          exClassName="bg-gray-50 hover:bg-gray-100 "
          strokeColor="#FF7E86"
          percent={57}
          bgStrokeColor="rgba(255, 126, 134, 0.1)"
          iconCircle="bg-gray-100"
        />
        <StatisticsCard
          name="Break fluid"
          exClassName="bg-gray-50 hover:bg-gray-100 "
          strokeColor="#A162F7"
          bgStrokeColor="rgba(161, 98, 247, 0.1)"
          percent={9}
        />
        <StatisticsCard
          name="Tire Wear"
          exClassName="bg-gray-50 hover:bg-gray-100 "
          strokeColor="#F6CC0D"
          bgStrokeColor="rgba(246, 204, 13, 0.1)"
          percent={25}
        />
      </div>
      <div className="flex flex-wrap -mx-4">
        <Card
          title={<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Apply for a car loan !</h5>}
          desc={<p className="mb-5 font-normal text-gray-700">This is a sample of a generated text</p>}
          callToActionBTN="Discover More"
          img={<img alt="laptop" src="./svgs/laptop.svg" style={{ minHeight: "10em", maxHeight: "14em" }} className="w-full" />}
          exClassName="bg-orange-200 hover:bg-orange-300"
          customSize="w-full md:w-1/2 xl:w-3/5"
        />
        <Card
          title={
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              You have earned <span className=" text-orange-500 text-4xl">20</span> Badges!
            </h5>
          }
          altDesc={<p className="font-normal text-start text-orange-500 text-sm">Hooray! Way to go Mohammed!</p>}
          img={<img alt="manWithWatch" src="./svgs/manWithWatch.svg" style={{ minHeight: "10em", maxHeight: "14em" }} className="w-full" />}
          exClassName="bg-slate-800 hover:bg-slate-900"
          customSize="w-full md:w-1/2 xl:w-1/5"
        />
        <Card
          title={
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              You have earned <span className=" text-orange-200 text-4xl">1500</span> Points!
            </h5>
          }
          altDesc={<p className="font-normal text-start text-orange-200 text-sm">Redeem and claim your rewards!</p>}
          img={<img alt="manRunning" src="./svgs/manRunning.svg" style={{ minHeight: "10em", maxHeight: "14em" }} className="w-full" />}
          exClassName="bg-pink-900 hover:bg-pink-800"
          customSize="w-full md:w-1/2 xl:w-1/5"
        />
      </div>
      <div className="flex flex-wrap -mx-4">
        <CarCardMenuColored car={{ id: 2, name: "Mini Cooper", recomended: "64", h: "32", views: "132" }} style={{ backgroundColor: "#E1DFA4" }} />
        <CarCardMenuColored car={{ id: 3, name: "Porsche 911 Carrera", recomended: "74", h: "28", views: "130" }} style={{ backgroundColor: "#E3ECF1" }} />
        <CarCardMenuColored car={{ id: 4, name: "Porsche 911 Carrera", recomended: "74", h: "28", views: "130" }} style={{ backgroundColor: "#F4E3E5" }} />
      </div>
    </div>
  );
};

export default Dashboard;
