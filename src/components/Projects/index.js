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

        <section className="box">
            <h2 >
                My Projects
            </h2>
            <br></br>
            <h3 >
                Click the images to checkout my projects.
            </h3>
            <div className="projects">
                <a href="https://github.com/Gelenhaus/shop-shop">
                    <img src={shopShop} style={{ width: "70%" }}>
                    </img>
                </a>
            </div>
            <div className="projects" >
                <a href="https://github.com/Gelenhaus/noteTakingApp">
                    <img src={noteTaker} style={{ width: "70%" }}>
                    </img>
                </a>
            </div>
            <div className="projects">
                <a href="https://github.com/JD-Rowley/permaculture-exchange">
                    <img src={finalProject} style={{ width: "70%" }} >
                    </img>
                </a>
            </div>
            <div className="projects">
                <a href="https://gelenhaus.github.io/myWeatherDashboard/">
                    <img src={weatherDashboard} style={{ width: "70%" }} >
                    </img>
                </a>
            </div>
            <div className="projects">
                <a href="https://github.com/Gelenhaus/pizzaHunt">
                    <img src={pizzaHunt} style={{ width: "70%" }}>
                    </img>
                </a>
            </div>
            <div className="projects">
                <a href="https://github.com/Gelenhaus/myFirstReact">
                    <img src={ohSnap} style={{ width: "70%" }}>
                    </img>
                </a>
            </div>
            <div className="projects">
                <a href="https://dippidydoo19.herokuapp.com/">
                    <img src={morningArch} style={{ width: "70%" }}>
                    </img>
                </a>
            </div>

        </section >
    );
}
export default Projects;