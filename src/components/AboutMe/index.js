import React from 'react';
import cover from '../../assets/cover/myReactPortfolioBackground.jpeg'


function AboutMe() {
    return (
        <section className="my-5">
            <h1 id="about">This is about me</h1>
            <img src={cover} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>

    );
}

export default AboutMe;