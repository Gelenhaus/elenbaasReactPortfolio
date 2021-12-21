import React from "react";

import noteTaker from '../../assets/noteTaker/noteTaker.jpg';
import morningArch from '../../assets/morningArch/morningarch.jpeg';
import ohSnap from '../../assets/ohSnap/ohSnap.jpg';
import pizzaHunt from '../../assets/pizzaHunt/pizzaHunt.jpg';
import shopShop from '../../assets/shopShop/shopShop.jpg';
import weatherDashboard from '../../assets/weatherDashBoard/weatherDashBoard.jpg';

function Projects() {

    return (
        <section>
            <h2>
                My Projects
            </h2>
            <div className="image">
                <img src={weatherDashboard} className="my-5" style={{ width: "70%" }} >
                </img>
                <a href="">
                </a>
            </div>
            <div className="image">
                <img src={noteTaker} className="my-5" style={{ width: "70%" }}>
                </img>
                <a href="">
                </a>
            </div>
            <div className="image">
                <img src={ohSnap} className="my-5" style={{ width: "70%" }}>
                </img>
                <a href="">
                </a>
            </div>
            <div className="image">
                <img src={morningArch} className="my-5" style={{ width: "70%" }}>
                </img>
                <a href="">
                </a>
            </div>
            <div className="image">
                <img src={pizzaHunt} className="my-5" style={{ width: "70%" }}>
                </img>
                <a href="">
                </a>
            </div>
            <div className="image">
                <img src={shopShop} className="my-5" style={{ width: "70%" }}>
                </img>
                <a href="">
                </a>
            </div>

        </section>
    );
}
export default Projects;