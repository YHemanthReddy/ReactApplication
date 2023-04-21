import { useState, useEffect } from "react";


const useGetResturantCards = () => {
    const [ resturantCard, setResturantCard ] = useState([]);

    function getResturant(){
        async function asyncGetResturant() {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setResturantCard(json.data.cards[2].data.data.cards);
        }
        catch (error) {
            console.log(error);
          }
        }
        asyncGetResturant(); 
        
    }
    useEffect(getResturant,[]);

    return resturantCard;
}

export default useGetResturantCards;