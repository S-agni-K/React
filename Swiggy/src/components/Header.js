import {LOGO_URL} from "../../utils/constants"
import {useState} from "react"

//There are two types of imports
//import LOGO_URL ... => for default exports(preferred)
//import {LOGO_URL} ... => for named exports

const Header = () => {
    const [btnName,setBtnName]=useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button className="login" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;
//There are 2 kinds of exports
//Default export - export default Header( at the last). Can be used once
// Named Export - export const Header(When that component is created). Can be used multiple times