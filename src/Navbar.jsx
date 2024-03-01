import React from 'react'
import {Link} from 'react-router-dom';

function Navbar (){
    return(
        <header>
            <div className="container-nav">
                <img className="logo" src="/public/images/shared/logo.svg" alt="Space logo"/>
                <nav>
                    <ul>
                        <li><Link className="link" to="/"><span>00</span>Home</Link></li>
                        <li><Link className="link" to="/destination"><span>01</span>Destination</Link></li>
                        <li><Link className="link" to="/crew"><span>02</span>Crew</Link></li>
                        <li><Link className="link" to="/technology"><span>03</span> Technology</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;