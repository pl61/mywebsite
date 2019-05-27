import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ activeItem, setActiveItem }) => (
  <div className='nav-bar'>
    <div id="item-about" className={activeItem === 'item-about' ? ' nav-active' : 'nav-item'} onClick={e => setActiveItem(e.target.id)}>About</div>
    <div id="item-skills" className={activeItem === 'item-skills' ? ' nav-active' : 'nav-item'} onClick={e => setActiveItem(e.target.id)}>Skills</div>
    <div id="item-apps" className={activeItem === 'item-apps' ? ' nav-active' : 'nav-item'} onClick={e => setActiveItem(e.target.id)}>Apps</div>
  </div>
);

Navbar.propTypes = {
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func,
};

export default Navbar;
