import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('about-item');

  return (
    <div className='nav-bar'>
      <div id="about-item" className={'nav-item' + (activeItem === 'about-item' ? ' nav-active' : '')} onClick={(e) => setActiveItem(e.target.id)}>About</div>
      <div id="skills-item" className={'nav-item' + (activeItem === 'skills-item' ? ' nav-active' : '')} onClick={(e) => setActiveItem(e.target.id)}>Skills</div>
      <div id="apps-item" className={'nav-item' + (activeItem === 'apps-item' ? ' nav-active' : '')} onClick={(e) => setActiveItem(e.target.id)}>Apps</div>
    </div>
  );
};

export default Navbar;
