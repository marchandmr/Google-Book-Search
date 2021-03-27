import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import "./header.css"




function Header() {
    return (
        <Jumbotron>
            <h1 className="virtual">Virtual Library</h1>
            <p className="headerSmall">
                Search, and save books using the google books API.
        </p>
            <p>

            </p>
        </Jumbotron>
    );
}

export default Header;
