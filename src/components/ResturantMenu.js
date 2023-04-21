import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer1";
import { RESTURANT_ITEM_URL } from "../utils/logo";

const RestaurantMenu = () => {
  const [restaurants, setRestaurants] = useState([{}]);
  const [resmenu, setResMenu] = useState([{}]);

  useEffect(() => {
    getRestaurantsId();
  }, []);
  const { id,name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
    restaurants;

  // how to read the dynamic url
  const {resId} = useParams();

  async function getRestaurantsId() {
    const data = await fetch(
      RESTURANT_ITEM_URL + resId
    );
    const json = await data.json();
    setRestaurants(json.data?.cards[0]?.card?.card?.info);
    setResMenu(json.data?.cards[2]);
  }

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="flex m-3 justify-around">
      <div>
        { <h1> Res-ID : {resId} </h1> }
        <h2> {name} </h2>
        <h2> {city} </h2>
        <h2> {costForTwoMessage} </h2>
        <h2> {avgRating} </h2>
      </div>
      <div className="res-menu">
        <h2>
          {" "}
          Menu
          {resmenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
            (card) => {
              return <li key={card?.card?.info.id}>{card?.card?.info?.name} </li>;
            }
          )}
        </h2>
      </div>
    </div>
  );
};

export default RestaurantMenu;