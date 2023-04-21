const Shimmer1 = () => {
    return (
        <div className="shimmer flex">
            <h1>Hello</h1>
            {Array(10).fill("").map((e, index) => (
                <div key= {index} className="h-56 w-56 bg-red-200 m-2 p-2">
                 </div>
            ))}
        </div>
    )
}
export default Shimmer1;