import React from 'react';

const Skills = () => {
  return (
    <div className="skills">
      <div className="feature">
        <h3>Front-End</h3><br/>
        <ul>
          <li>JavaScript ES6+</li>
          <li>HTML5</li>
          <li>CSS/LESS/SCSS</li>
          <li>React</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Webpack</li>
          <li>Babel</li>
        </ul>
      </div>
      <div className="feature">
        <h3>Back-End</h3><br/>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Socket.IO</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>Heroku</li>
        </ul>
      </div>
      <div className="feature">
        <h3>Other</h3><br/>
        <ul>
          <li>Jest</li>
          <li>Enzyme</li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>Git</li>
          <li>Travis CI</li>
          <li>Agile</li>
          <li>Microservices</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
