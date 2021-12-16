import React from 'react';
import aboutMeImage from '../../assets/cover/myReactPortfolioBackground.jpeg'


const AboutMe = () => {
    /*  
        The below is JSX (JavaScript XML), a "syntax extension system to javascript".
        It is the equivalent to using the following code
          React.createElement("div", {},[
          React.createElement("h1", {}, "About me."),
          React.createElement("p", {}, "My name is Gerrit Elenbaas") ])

    */

    return (
        <div className="my-5">
            <h1 id="about">
                About me.
            </h1>
            <p>
                My name is Gerrit Elenbaas -- and I want to code.
                <br></br>
                I am 8 feet tall and have an appetite for destruction.
                <br></br>
                I have am functionally immortal and love dogs.
                <br></br>
                I am bohemian hell minx deep space pearl diver.
                <br></br>
                I made this using React
            </p>
            <img src={aboutMeImage} className="my-2" style={{ width: "90%", height: "80%" }} alt="cover"></img>
        </div>
    )
}


export default AboutMe;