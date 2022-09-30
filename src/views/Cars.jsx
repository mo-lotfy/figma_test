import React, { useEffect, useState } from "react";
import List from "../components/List";
import CarCardMenu from "../components/CarCardMenu";
import CarCardList from "../components/CarCardList";
import { AiOutlineMenu } from "react-icons/ai";

const Cars = ({ search }) => {
  const [cars, setCars] = useState([]);
  const [displayAsCards, setDisplayAsCards] = useState(true);

  const [listItemsBrand, setListItemsBrand] = useState([]);
  const [listItemsUsers, setListItemsUsers] = useState([]);

  const [filterByBrand, setFilterByBrand] = useState("All");
  const [filterByUser, setFilterByUsers] = useState("All");

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
        if (!!search) {
          carsArray = carsArray.filter((car) => {
            let pattern = new RegExp(search, "gi");
            return car.name.match(pattern);
          });
        }
        if (filterByBrand !== "All") {
          carsArray = carsArray.filter((car) => {
            return car.brand === filterByBrand;
          });
        }
        if (filterByUser !== "All") {
          carsArray = carsArray.filter((car) => {
            return +car.users === +filterByUser;
          });
        }
        setListItemsBrand(carsArray.map((car) => car.brand));
        setListItemsUsers(carsArray.map((car) => car.users));

        setCars(carsArray);
        return;
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filterByBrand, filterByUser]);

  return (
    <div className="main-page-wrapper">
      <span className="mb-2 text-3xl font-bold tracking-tight text-gray-900">Booking</span>
      <div className="my-8 flex justify-between content-center">
        <div className="sm:w-full md:w-1/2 flex flex-row">
          <List listItems={listItemsBrand} filterBy={setFilterByBrand} value={filterByBrand} />
          <List listItems={listItemsUsers} filterBy={setFilterByUsers} value={filterByUser} />
        </div>
        <div className="sm:w-full md:w-1/2 flex flex-row justify-end">
          <button
            style={{ width: "3.5em", height: "3.5em" }}
            type="button"
            onClick={() => setDisplayAsCards(!displayAsCards)}
            className=" bg-white hover:bg-slate-200 focus:ring-2 focus:outline-none focus:bg-slate-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center mr-2 w-auto"
          >
            {displayAsCards && <img alt="menu" src="./icons/menu.svg" />}
            {!displayAsCards && <AiOutlineMenu size={25} />}
          </button>
          <button
            style={{ width: "3.5em", height: "3.5em" }}
            type="button"
            className="text-white bg-violet-500 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center mr-2 w-auto"
          >
            <img alt="setting" src="./icons/settings.svg" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        {cars?.map((car) => {
          return displayAsCards ? <CarCardMenu key={car.id} car={car} /> : <CarCardList key={car.id} car={car} />;
        })}
      </div>
    </div>
  );
};

export default Cars;
