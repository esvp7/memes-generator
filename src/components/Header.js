import React from "react";
import trollface from "./img/Logo.png";

const Header = () => {
	return (
       <header className="header">
            <img src={trollface} alt="logo" className="header--image"/>
            <h2 className="header--title">MemeGenerator</h2>
            <h4 className="header--project">Chad Approved - Random Shit</h4>
        </header>
	);
}

export default Header;