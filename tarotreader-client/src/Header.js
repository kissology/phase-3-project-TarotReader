import React from'react';
import { Link } from "react-router-dom";


 function Header(){
    return (
        <div className="header">
             <nav className="nav-bar">
                <div id="link-container">
                    <Link className="nav-link" to="/Readings">
                        Past Readings 🔮
                    </Link>
                </div>
            </nav>
            <h3>Pick A Card</h3>
           
        </div>
    )
 }

 export default Header;