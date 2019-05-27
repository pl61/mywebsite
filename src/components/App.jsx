import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Navbar from './Navbar.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Apps from './pages/Apps.jsx';

const App = () => {
  const [activeItem, setActiveItem] = useState('item-about');

  const selectContent = (selected) => {
    if (selected === 'item-about') {
      return <About/>;
    } if (selected === 'item-skills') {
      return <Skills/>;
    } if (selected === 'item-apps') {
      return <Apps/>;
    }

    return 'oh no';
  };

  useEffect(() => {
    let delay = 0;

    $('.feature').each(function () {
      setTimeout(() => {
        $(this).addClass('load');
      }, delay);

      delay += 100;
    });
  });

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem}/>
      {selectContent(activeItem)}
    </div>
  );
};

export default App;
