import React from 'react';
import cover from '../../assets/cover/myReactPortfolioBackground.jpeg'
import Button from 'react-bootstrap/Button';
import mountainPicture from '../../assets/mountain/bigsky.jpeg'

function AboutMe() {
    return (


        
        <section className="outsideBox">

            <div>
                
            </div>

            <div class="card">
                <img class="card-image-top" src={mountainPicture} alt="A mountain top.">
                </img>
                <div class="card-body">
                    <h5 class="card-title">
                        Somethings about me.
                                </h5>
                    <p class="card-text">
                    I am an aspiring fullstack web developer from Michigan.
          
          I graduated from Central Michigan University with a double major in Psychology and Philosophy.
        
          I grew up raising swine, and cattle, and one ill-tempered horse.
              
          I enjoy skiing, Magic the Gathering, and hiking.
          
          I started learning to code at the University of Utah until Covid hit.
          
          Afterward I continued to work and joined the University of Utah coding bootcamp.
          
          I currently reside just outside of Salt Lake City Utah.
                                </p>

                    

                </div>
            </div>


            {/* <h1 id="about">About me</h1>
            <p>My name is Gerrit Elenbaas
            
            I am an aspiring fullstack web developer from Michigan.
          
            I graduated from Central Michigan University with a double major in Psychology and Philosophy.
          
            I grew up raising swine, and cattle, and one ill-tempered horse.
                
            I am enjoy skiing, Magic the Gathering, and hiking.
            
            I started learning to code at the University of Utah until Covid hit.
            
            Afterward I continued to work and joined the University of Utah coding bootcamp.
            
            I currently reside just outside of Salt Lake City Utah.
            </p>
            <img src={cover} className="myNaturePhoto" alt="cover" /> */}


        </section>


    );
}

export default AboutMe;