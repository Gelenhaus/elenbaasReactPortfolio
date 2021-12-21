import React, { useState } from 'react';
import Nav from './components/Nav/index';
import AboutMe from './components/AboutMe/index';
import Projects from './components/Projects/index';
import Footer from './components/Footer/index';
import ContactMe from './components/ContactMe/index'
import Resume from './components/Resume/index'
import './App.css';

function App() {
  const [currentCategory, setCurrentCategory] = useState('AboutMe');
  function showNew() {
    switch (currentCategory) {

      case 'ContactMe':
        return <ContactMe></ContactMe>

      case 'Projects':
        return <Projects></Projects>

      default:
        return <AboutMe />
    }
  }

  return (
    <div>
      <nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></nav>
      <div>
        {showNew(currentCategory)}
      </div>
    </div>
  );
}

export default App;