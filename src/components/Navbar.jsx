import React from 'react';

const Navbar = ({ activeItem, setActiveItem }) => (
  <div className='nav-bar'>
    <div id="about-item" className={activeItem === 'about-item' ? ' nav-active' : 'nav-item'} onClick={(e) => setActiveItem(e.target.id)}>About</div>
    <div id="skills-item" className={activeItem === 'skills-item' ? ' nav-active' : 'nav-item'} onClick={(e) => setActiveItem(e.target.id)}>Skills</div>
    <div id="apps-item" className={activeItem === 'apps-item' ? ' nav-active' : 'nav-item'} onClick={(e) => setActiveItem(e.target.id)}>Apps</div>
  </div>
);

export default Navbar;
