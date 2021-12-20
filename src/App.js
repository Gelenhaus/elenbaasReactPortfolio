import React from 'react';
import Nav from './components/Nav/index';
import AboutMe from './components/AboutMe/index';
import Projects from './components/Projects/index';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Projects></Projects>
        <AboutMe></AboutMe>
      </main>
    </div>
  );
}

export default App;