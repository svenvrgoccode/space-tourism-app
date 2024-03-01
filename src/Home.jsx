import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar.jsx"

function Home (){
    return(
        <>
            <Navbar/>
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>SO, YOU WANT TO TRAVEL TO</h2>
                            <h1>SPACE</h1>
                            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </div>
                        <div className="col">
                            <Link to="/destination">EXPLORE</Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;