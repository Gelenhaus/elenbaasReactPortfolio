import React, { useState } from 'react';
import Nav from './components/Nav/index';
import AboutMe from './components/AboutMe/index';
import Portfolio from './components/Portfolio/index';

function App() {
  const [pictures] = useState([

    {
      name: 'morningArch',
      descriptions: 'A project about hiking.'
    },
    {
      name: 'noteTaker',
      descriptions: 'A project for keeping notes.'
    },
    {
      name: 'ohSnap',
      descriptions: 'A personal single page react portfolio for a friend'
    },
    {
      name: 'pizzaHunt',
      descriptions: 'A fan site for pizza enthusiasts'
    },
    {
      name: 'shopShop',
      descriptions: 'A mock online store'
    },
    {
      name: 'weatherDashBoard',
      descriptions: ' A project for looking up weather conditions'
    }
  ]);

  const [currentProjectPicture, setCurrentProjectPicture] = useState(pictures[0]);

  return (
    <div>
      <Nav
        pictures={pictures}
        setCurrentProjectPicture={setCurrentProjectPicture}
        currentProjectPicture={currentProjectPicture}
      ></Nav>
      <main>
        <div>
          <Portfolio></Portfolio>
          <AboutMe></AboutMe>
        </div>
      </main>
    </div>
  );


}

export default App;
