import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";

const Cars = ({ search }) => {
  const [cars, setCars] = useState([]);

  let getData = () => {
    fetch("./cars.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async function (response) {
        console.log(response);
        let carsArray = await response.json();
        if (!!search) {
          carsArray = carsArray.filter((car) => {
            return new RegExp(car.name).test(search);
          });
        }

        setCars(carsArray);
        return;
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-page-wrapper">
      <div class="flex flex-wrap -mx-4">
        {cars?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
