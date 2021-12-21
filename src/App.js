import React, { useState } from 'react';
import Nav from './components/Nav/index';
import AboutMe from './components/AboutMe/index';
import Projects from './components/Projects/index';
import Footer from './components/Footer/index';
import ContactMe from './components/ContactMe/index'
import Resume from './components/Resume/index'


function App() {

  const [currentCategory, setCurrentCategory] = useState('AboutMe');

  function changeCategory(currentCategory) {

    switch (currentCategory) {

      case 'ContactMe':
        return (<ContactMe />);

      case 'Resume':
        return (<Resume />);

      case 'Projects':
        return (<Projects />);

      default:
        return (<AboutMe />);

    }
  }

  return (
    <div>
      <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <section>
        {changeCategory(currentCategory)}
      </section>
      <Footer />
    </div>
  );
}

export default App;