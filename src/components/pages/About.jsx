import React from 'react';
import iconLocation from '../../icons/icon-location.png';
// import iconEmail from '../../icons/icon-email.png';
import iconGithub from '../../icons/icon-github.png';
import iconLinkedin from '../../icons/icon-linkedin.png';

const About = () => (
  <div className="about">
    <div className="responsive-640">
      <div className="feature">
        <h2>Peter Liu</h2>
        <h3>Software Engineer</h3>
        <h4></h4>
        <div><img src={iconLocation}></img> Vancouver / Canada</div>
        {/* <div><img src={iconEmail}></img> <a href="" target="_blank"></a></div> */}
        <div><img src={iconGithub}></img> <a href="https://github.com/pl61" target="_blank" rel="noreferrer noopener">github.com/pl61</a></div>
        <div><img src={iconLinkedin}></img> <a href="https://linkedin.com/in/pl61" target="_blank" rel="noreferrer noopener">linkedin.com/in/pl61</a></div>
      </div>
      <div className="feature text-wrap">
        <p>Currently seeking new opportunities. Passionate about solving problems using my knowledge in coding and engineering. Experienced with full-stack web development using React, Bootstrap, Node, MySQL/MongoDB, Docker, and AWS.</p><br/>
        <p>Outside of work I enjoy gaming, jogging, and an occasional round of golf. Based on my old Sun Run results I am exceptionally average for my age group.</p>
      </div>
    </div>
    <div className="feature">
      <h3>Education</h3>
      <div className="education">
        <p><strong>Hack Reactor</strong><br/>
        Software Engineering<br/>
        <i>Completed</i><br/>
        2019</p>
        <p><strong>University of British Columbia</strong><br/>
        Cell Biology<br/>
        <i>MSc</i><br/>
        2014-2018</p>
        <p><strong>University of Toronto</strong><br/>
        Cell Biology<br/>
        <i>HBSc</i><br/>
        2010-2014</p>
      </div>
    </div>
  </div>
);

export default About;
