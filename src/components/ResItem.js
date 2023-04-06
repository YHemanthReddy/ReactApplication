const ResItem = (props) =>{
    const { resItemData } = props
    const {image , name, rating, cuisine} = resItemData?.info
    return (
       <div className="resItemCon">
            <img className = "resItemImg" src = {image.url}/>
            <h4 className="resItemName"> {name} </h4>
            <h4 className= "resItemRating">{rating.aggregate_rating}</h4>
            <h4 className= "resItemRating">{
                 cuisine.map(((cui) => cui?.name)).join(", ")
            }</h4>
       </div> 
    )
}

export default ResItem;