import React from 'react';
import iconLocation from '../../icons/icon-location.png';
import iconEmail from '../../icons/icon-email.png';
import iconGithub from '../../icons/icon-github.png';
import iconLinkedin from '../../icons/icon-linkedin.png';

const About = () => {
  return (
    <div className="content">
      <div className="feature">
        <h2>Peter Liu</h2>
        <h3>Software Engineer</h3>
        <img src={iconLocation}></img>
        <img src={iconEmail}></img>
        <img src={iconGithub}></img>
        <img src={iconLinkedin}></img>
      </div>
      <div className="feature">
        <h3>Education</h3>
      </div>
      <div className="feature">
        <h3>Experience</h3>
      </div>
    </div>
  );
};

export default About;
