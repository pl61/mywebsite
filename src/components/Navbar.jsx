import React from 'react';

const Navbar = ({ activeItem, setActiveItem }) => (
  <div className='nav-bar'>
    <div id="item-about" className={activeItem === 'item-about' ? ' nav-active' : 'nav-item'} onClick={(e) => setActiveItem(e.target.id)}>About</div>
    <div id="item-skills" className={activeItem === 'item-skills' ? ' nav-active' : 'nav-item'} onClick={(e) => setActiveItem(e.target.id)}>Skills</div>
    <div id="item-apps" className={activeItem === 'item-apps' ? ' nav-active' : 'nav-item'} onClick={(e) => setActiveItem(e.target.id)}>Apps</div>
  </div>
);

export default Navbar;
