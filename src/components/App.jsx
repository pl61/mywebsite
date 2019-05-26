import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';

const App = () => {
  const [activeItem, setActiveItem] = useState('about-item');

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem}/>
      <Content activeItem={activeItem}/>
    </div>
  );
};

export default App;
