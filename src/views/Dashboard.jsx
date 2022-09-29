import React from "react";
import Card from "../components/Card";
import StatisticsCard from "../components/StatisticsCard";

const Dashboard = () => {
  return (
    <div className="main-page-wrapper">
      <div class="flex flex-wrap -mx-4">
        <StatisticsCard
          name="Energy"
          exClassName="bg-purple-500 hover:bg-purple-600"
          strokeColor="#fff"
          percent={45}
          unStrocked="#B37EFC"
          color="text-white"
          iconCircle="bg-purple-400"
        />
        <StatisticsCard name="Range" exClassName="bg-gray-50 hover:bg-gray-100 " strokeColor="#FF7E86" percent={57} iconCircle="bg-gray-100" />
        <StatisticsCard name="Break fluid" exClassName="bg-gray-50 hover:bg-gray-100 " strokeColor="#A162F7" percent={9} />
        <StatisticsCard name="Tire Wear" exClassName="bg-gray-50 hover:bg-gray-100 " strokeColor="#F6CC0D" percent={25} />
      </div>
      <div class="flex flex-wrap -mx-4">
        <Card
          title={<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Apply for a car loan !</h5>}
          desc={<p className="mb-5 font-normal text-gray-700">This is a sample of a generated text</p>}
          callToActionBTN="Discover More"
          img={<img alt="laptop" src="./svgs/laptop.svg" className="h-60 w-3/5 ml-4" />}
          exClassName="bg-orange-200 hover:bg-orange-300"
          customSize="w-full sm:w-1/2 md:w-1/2 xl:w-1/2"
        />
        <Card
          title={
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              You have earned <span className=" text-orange-500 text-4xl">20</span> Badges!
            </h5>
          }
          altDesc={<p className="font-thin text-orange-500">Hooray! Way to go Mohammed!</p>}
          img={<img alt="manWithWatch" src="./svgs/manWithWatch.svg" className="h-60 w-3/5 ml-4" />}
          exClassName="bg-slate-800 hover:bg-slate-900"
          customSize="w-full sm:w-1/2 md:w-1/2 xl:w-1/4"
        />
        <Card
          title={
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              You have earned <span className=" text-orange-200 text-4xl">20</span> Points!
            </h5>
          }
          altDesc={<p className="font-normal text-orange-200">Redeem and claim your rewards!</p>}
          img={<img alt="manRunning" src="./svgs/manRunning.svg" className="h-60 w-3/5 ml-4" />}
          exClassName="bg-pink-900 hover:bg-pink-800"
          customSize="w-full sm:w-1/2 md:w-1/2 xl:w-1/4"
        />
      </div>
    </div>
  );
};

export default Dashboard;
