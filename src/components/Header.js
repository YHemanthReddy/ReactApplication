import { Link } from "react-router-dom";
import { LOGO } from "../utils/logo";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () =>{
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <div className="flex justify-around bg-orange-200 shadow-lg">
            <div className= " w-28 px-1.5 my-1 rounded-lg sm:justify-center shrink-0 ">
                <img src= {LOGO}>
                </img>
            </div>
            <div className= "nav">
                <ul className="flex py-10 ">
                    <Link to = "/" >
                        <li className="px-2">Home</li>
                    </Link>
                    <Link to = "/about">
                        <li  className="px-2">About</li>
                    </Link>
                    <Link to= "/contact">
                        <li  className="px-2">Contact</li>
                    </Link>
                    <Link to ="/resturant">
                        <li  className="px-2">Cart</li>
                    </Link>
                </ul>
                {user.name};
            </div>
        </div>
    )
}

export default Header;