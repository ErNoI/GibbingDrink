import React, { useEffect } from "react";
import { getAllEnergyDrinks } from "./dataHandler";
import Card from "./Card/Card";

export const List = ({ filter }) => {
  const [EnergyDrinks, setEnergyDrinks] = React.useState([]);

  useEffect(() => {
    if (filter === "All") {
      setEnergyDrinks(getAllEnergyDrinks());
    } else if (filter === "Gibbing") {
      setEnergyDrinks(
        getAllEnergyDrinks().filter((drink) => drink.gibbin === true)
      );
    } else {
      setEnergyDrinks(
        getAllEnergyDrinks().filter((drink) => drink.gibbin === false)
      );
    }
  }, [filter]);

  return (
    <div className="list">
      {EnergyDrinks.map((drink, index) => {
        return <Card key={index} drink={drink} />;
      })}
    </div>
  );
};

export default List;
