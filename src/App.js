import React from 'react';
import Nav from './components/Nav/index';
import AboutMe from './components/AboutMe/index';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <AboutMe></AboutMe>
      </main>
    </div>
  );
}

export default App;