import ResItem from "./ResItem";
import resItemList from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
    
    const [ resItemListState, setResItemListState ] = useState(resItemList);
    //const arr = useState(resItemList);
    //const resItemListState = arr[0];
    //const setResItemListState = arr[1];

    return (
        <div className="body">
            <div className="filter">
                <button className="filterBtn" onClick={
                    () => {
                       const filterRes = resItemListState.filter(
                        (res) => {
                            let rating = +res.info.rating.aggregate_rating;
                              rating > 4.1;
                            }
                       );
                       console.log(filterRes);
                       setResItemListState(filterRes);
                    }
                }>Filter</button>
            </div>
            <div className="resContainer">
                { resItemListState.map((resturant) => (
                    <ResItem key = {resturant.info.resId} resItemData= {resturant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;