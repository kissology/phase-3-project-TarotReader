import React from'react';
import { Link } from "react-router-dom";


 function Header() {
    return (
        <div className="wrapper" id="header-container">
            <header className="header">
             <nav className="nav-bar">
             <div className="link-home">
                    <Link className="nav-link-home" to="/">
                        Home 🌙
                    </Link>
                </div>
                <br></br>
                <div className="link-reading">
                    <Link className="nav-link-readings" to="/readings">
                        Past Readings 🔮
                    </Link>
                </div>
                <br></br>
                <div className="link-client">
                    <Link className="nav-link-client" to="/clients">
                        Clients ✨
                    </Link>
                </div>
            </nav>
            </header>
           </div>
    )
    }
           
export default Header;