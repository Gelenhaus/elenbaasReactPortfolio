import React from 'react';
import ohSnap from '../../assets/ohSnap/ohSnap.jpg'


function AboutMe() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={ohSnap} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>

    );
}

export default AboutMe;