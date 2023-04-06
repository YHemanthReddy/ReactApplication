import { LOGO } from "../utils/logo";
const Header = () =>{
    return (
        <div className= "header">
            <div className= "logo">
                <img src= {LOGO}>
                </img>
            </div>
            <div className= "nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;