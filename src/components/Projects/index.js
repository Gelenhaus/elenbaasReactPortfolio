import React from "react";
import noteTaker from '../../assets/noteTaker/noteTaker.jpg';

function Projects(props) {
    const currentCategory = {
        name: "commercial",
        description:
            "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img
                    src={noteTaker}
                    alt="Commercial Example"
                    className="img-thumbnail mx-1"
                ></img>
            </div>
        </section>
    );
}
export default Projects;