import React from "react";

import noteTaker from '../../assets/noteTaker/noteTaker.jpg';
import morningArch from '../../assets/morningArch/morningarch.jpeg';
import ohSnap from '../../assets/ohSnap/ohSnap.jpg';
import pizzaHunt from '../../assets/pizzaHunt/pizzaHunt.jpg';
import shopShop from '../../assets/shopShop/shopShop.jpg';
import weatherDashboard from '../../assets/weatherDashBoard/weatherDashBoard.jpg';
import finalProject from '../../assets/finalProject/finalProject.jpg';

function Projects() {

    return (
        <section>
            <h2>
                PROJECT SECTION
            </h2>
            <h3>
                Click the images to checkout my projects.
            </h3>
            <div className="image">
                <a href="https://gelenhaus.github.io/myWeatherDashboard/">
                    <img src={weatherDashboard} className="my-5" style={{ width: "70%" }} >
                    </img>
                </a>


            </div>
            <div className="image">
                <a href="https://github.com/JD-Rowley/permaculture-exchange">
                    <img src={finalProject} className="my-5" style={{ width: "70%" }} >
                    </img>
                </a>


            </div>
            <div className="image">
                <a href="https://github.com/Gelenhaus/noteTakingApp">
                    <img src={noteTaker} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>


            </div>
            <div className="image">
                <a href="https://github.com/Gelenhaus/myFirstReact">
                    <img src={ohSnap} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>


            </div>
            <div className="image">
                <a href="https://dippidydoo19.herokuapp.com/">
                    <img src={morningArch} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>


            </div>
            <div className="image">
                <a href="https://github.com/Gelenhaus/pizzaHunt">
                    <img src={pizzaHunt} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>


            </div>
            <div className="image">

                <a href="https://github.com/Gelenhaus/shop-shop">
                    <img src={shopShop} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>
            </div>

        </section>
    );
}
export default Projects;