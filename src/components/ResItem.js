import {IMAGE_URL } from "../utils/logo";
const ResItem = (props) =>{
    const { resItemData } = props
    const {cloudinaryImageId , name, rating, cuisines, costForTwoString} = resItemData?.data
    return (
       <div className="w-52 h-72 m-1 p-2 bg-gray-300 rounded-lg" >
            <img className = "resItemImg" src = {IMAGE_URL + cloudinaryImageId}/>
            <h4 className="text-lg font-bold"> {name} </h4>
            <h4 className= "resItemRating">{rating}</h4>
            <h4 className= "resItemRating">{
                 cuisines.map(((cui) => cui)).join(", ")
            }</h4>
            <h4>{costForTwoString}</h4>
       </div> 
    )
}

export default ResItem;