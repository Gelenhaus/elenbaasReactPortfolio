import React from "react";

import noteTaker from '../../assets/noteTaker/noteTaker.jpg';
import morningArch from '../../assets/morningArch/morningarch.jpeg';
import ohSnap from '../../assets/ohSnap/ohSnap.jpg';
import pizzaHunt from '../../assets/pizzaHunt/pizzaHunt.jpg';
import shopShop from '../../assets/shopShop/shopShop.jpg';
import weatherDashboard from '../../assets/weatherDashBoard/weatherDashBoard.jpg';
import finalProject from '../../assets/finalProject/finalProject.jpg';
import Button from 'react-bootstrap/Button';
import mountainPicture from '../../assets/mountain/bigsky.jpeg'

import Alert from 'react-bootstrap/Alert';

function Projects() {

    return (

        <section >



            {/* <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div class="card">
                            <img class="card-image-top" src={mountainPicture} alt="A mountain top.">
                            </img>
                            <div class="card-body">
                                <h5 class="card-title">
                                    The name of the Project.
                                </h5>
                                <p class="card-text">
                                    This is the project description.
                                </p>

                                <Button> Link to github project.</Button>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card">
                            <img class="card-image-top" src={mountainPicture} alt="A mountain top.">
                            </img>
                            <div class="card-body">
                                <h5 class="card-title">
                                    This is a header-5
                                </h5>
                                <p class="card-text">
                                    This is the project description.
                                </p>

                                <Button> Link to github project.</Button>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card">
                            <img class="card-image-top" src={mountainPicture} alt="A mountain top.">
                            </img>
                            <div class="card-body">
                                <h5 class="card-title">
                                    The name of the Project.
                                </h5>
                                <p class="card-text">
                                    This is a project description.
                                </p>

                                <Button> Link to github project.</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



            <h2 >
                My Projects
            </h2>
            <h3>
                Click the images to checkout my projects.
            </h3>
            <div className="projects">
                <a href="https://gelenhaus.github.io/myWeatherDashboard/">
                    <img src={weatherDashboard} className="my-5" style={{ width: "70%" }} >
                    </img>
                </a>


            </div>
            <div className="projects">
                <a href="https://github.com/JD-Rowley/permaculture-exchange">
                    <img src={finalProject} className="my-5" style={{ width: "70%" }} >
                    </img>
                </a>


            </div>
            <div className="projects" >
                <a href="https://github.com/Gelenhaus/noteTakingApp">
                    <img src={noteTaker} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>


            </div>
            <div className="projects">
                <a href="https://github.com/Gelenhaus/myFirstReact">
                    <img src={ohSnap} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>


            </div>
            <div className="projects">
                <a href="https://dippidydoo19.herokuapp.com/">
                    <img src={morningArch} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>


            </div>
            <div className="projects">
                <a href="https://github.com/Gelenhaus/pizzaHunt">
                    <img src={pizzaHunt} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>


            </div>
            <div className="projects">

                <a href="https://github.com/Gelenhaus/shop-shop">
                    <img src={shopShop} className="my-5" style={{ width: "70%" }}>
                    </img>
                </a>
            </div>

        </section >
    );
}
export default Projects;