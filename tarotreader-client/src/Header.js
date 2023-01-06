import React from'react';
import { Link } from "react-router-dom";


 function Header() {
    return (
        <div className="wrapper" id="header-container">
            <header className="header">
             <nav className="nav-bar">
                <div id="link-container">
                    <Link className="nav-link" to="/Readings">
                        Past Readings 🔮
                    </Link>
                </div>
                <div>
                    <Link className="nav-link-client" to="/Clients">
                        ✨ Clients 🌙
                    </Link>
                </div>
            </nav>
            </header>
           </div>
    )
    }
           
export default Header;