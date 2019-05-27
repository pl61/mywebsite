import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Navbar from './Navbar.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Apps from './pages/Apps.jsx';

const App = () => {
  const [activeItem, setActiveItem] = useState('skills-item');

  const selectContent = (selected) => {
    if (selected === 'about-item') {
      return <About/>;
    } else if (selected === 'skills-item') {
      return <Skills/>;
    } else if (selected === 'apps-item') {
      return <Apps/>;
    }
  }

  useEffect(() => {
    let delay = 0;

    $('.feature').each(function() {

      setTimeout(() => {
        $(this).addClass('load')
      }, delay);

      delay += 100
    });
  });

  return (
    <div style={{height:'100%'}}>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem}/>
      {selectContent(activeItem)}
    </div>
  );
};

export default App;
