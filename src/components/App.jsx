import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Apps from './pages/Apps.jsx';

const App = () => {
  const [activeItem, setActiveItem] = useState('about-item');

  const selectContent = (selected) => {
    switch(selected) {
      case 'about-item':
        return <About/>;
      case 'skills-item':
        return <Skills/>;
      case 'apps-item':
        return <Apps/>;
      default:
        return 'This should never show up';
    }
  }

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem}/>
      {selectContent(activeItem)}
    </div>
  );
};

export default App;
