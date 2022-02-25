import React from 'react';
import cover from '../../assets/cover/myReactPortfolioBackground.jpeg'


function AboutMe() {
    return (
        <section className="my-5">
            <h1 id="about">About me</h1>
            <p>My name is Gerrit Elenbaas
            <br></br>
            I am an aspiring fullstack web developer from Michigan.
            <br></br>
            I graduated from Central Michigan University with a double major in Psychology and Philosophy.
            <br></br>
            I grew up raising swine, and cattle, and one ill-tempered horse.
                <br></br>
            I am enjoy skiing, Magic the Gathering, and hiking.
            <br></br>
            I started learning to code at the University of Utah until Covid hit.
            <br></br>
            Afterward I continued to work and joined the University of Utah coding bootcamp.
            <br></br>
            I currently reside just outside of Salt Lake City Utah.
            </p>
            <img src={cover} className="myNaturePhoto" alt="cover" />

        </section>

    );
}

export default AboutMe;