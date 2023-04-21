import ResItem from "./ResItem";
import resItemList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import useGetResturantCards from "../utils/useGetResturantCards";
import Shimmer1 from "./Shimmer1";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
    
    const resturantsCards = useGetResturantCards(); 
    const {user, setUser} = useContext(UserContext);
    const searchBtn = () => {
        () => {
           const filterRes = resturantsCards.filter(
            (res) => {
                let rating = +res.data.rating;
                  rating > 4.1;
                }
           );
           console.log(filterRes);
           setResturantsCards(filterRes);
        }
    }

    return !resturantsCards? (<Shimmer1 />) : (
        <div className="p-4">
           
            <div className="bg-orange-200">
                <button className="rounded-md bg-black text-white p-3 m-2 shadow-sm" onClick={searchBtn}>Filter</button>
                <input className="" value={user.name} onChange={(e) => setUser({
                    name : e.target.value})}></input>
            </div>
            <div className="flex flex-wrap justify-center">
                
                { resturantsCards.map((resturant) => (
                    <Link to = {"/resturant/" + resturant.data.id}  key = {resturant?.data?.id}>
                        <ResItem key = {resturant?.data?.id} resItemData= {resturant}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;