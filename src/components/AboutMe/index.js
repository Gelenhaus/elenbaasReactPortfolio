import React from 'react';
import mountainPicture from '../../assets/mountain/bigsky.jpeg';

function AboutMe() {
    return (
        <section>
            <div className="box">
                <div className="box">
                    <img className="customBorder" src={mountainPicture} alt="A mountain top."></img>
                    <h5>
                        Somethings about me.
                    </h5>
                    <p>
                    I am an aspiring fullstack web developer from Michigan.
          
                    I graduated from Central Michigan University with a double major in Psychology and Philosophy.
        
                    I grew up raising swine, and cattle, and one ill-tempered horse.
              
                    I enjoy skiing, Magic the Gathering, and hiking.
          
                    I started learning to code at the University of Utah until Covid hit.
          
                    Afterward I continued to work and joined the University of Utah coding bootcamp.
          
                    I currently reside just outside of Salt Lake City Utah.
                </p>
                </div>
                
            <div >
                    
                </div>
            </div>
        </section>
    );
}

export default AboutMe;