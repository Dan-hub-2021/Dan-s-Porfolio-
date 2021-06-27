import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Dan. I'm a full stack engineer with knowledge in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. Currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            </Content>

    <section id="resume" className="resume">
        <div className="container">
          <br/>
          <div className="row">
            <div className="" data-aos="fade-up">
              <div className="resume-item pb-0">
                <h3>Dan Sy </h3>
                <p><em>Seek a position in the web development position. I have both front-end and back-end knowledge and would love to help companies grow to their full potential.</em></p>
                <ul>
                  <li>131 L*********, I******, CA</li>
                  <li>(626) 689-****</li>
                  <li>dan.*******@westcliff.edu</li>
                </ul>
                <br/>
              </div>
              <h2 className="resume-title">Education</h2>
              <br/>
              <div className="resume-item">
                <h4>Full Stack Developer</h4>
                <h5>1/2021 - 6/2021</h5>
                <p><em>Westcliff University, Irvine, CA</em></p>
                <p>In the bootcamp we learn the front and back-end development.</p>
              </div>
              <br/>
              <div className="resume-item">
                <h4>Master of Business Administration</h4>
                <h5>2017 - 2019</h5>
                <p><em>Westcliff University, Irvine, CA</em></p>
                <p>My MBA foucs was Financial Mangament. In this program we learned more about the business Administration and how to value the most imprtant aspect of a work place which was the workers and how to lead by example.</p>
              </div>
              <br/>
              <div className="resume-item">
                <h4>Bachelor of Science </h4>
                <h5>2012 - 2016</h5>
                <p><em>South University, Savanh, GA</em></p>
                <p>My major at the school was Health Science. I the course of my undergratuate degree we focused on the medical aspect of science and how the it applied to the medical field.</p>
              </div>
              <br/>
            </div>
            <div className="" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Work Experience</h3>
              <br/>
              <div className="resume-item">
                <h4>Field Supervisor</h4>
                <h5>2008 - Present</h5>
                <p><em>Richard Heath and Associates, Santa Fe Spring, CA</em></p>
                <ul>
                  <li>Supervise Field Inspectors in field activities and conduct field ride-a-longs.</li>
                  <li>Delegate tasks to the 5 members of the Inspection department and provide counsel on all aspects of the programs. </li>
                  <li>Supervise the assessment of all meeting materials in order to ensure quality and accuracy of the our inspections</li>
                  <li>Overseing a seperate program with the help of one other person in conducting virtual inspection and detrmining efficient use of production project budgets generating $2,000 - $3,000 extra revenue for the department a month</li>
                </ul>
              </div>
              <br/>
              <div className="resume-item">
              <h4>Skills</h4>
                <h5>Font-End</h5>
                <ul>
                  <li>HTML5, JavScript ES6, CSS, SASS, React.js, jQuery, VUE.js, Ajax</li>
                </ul>
                <h5>Back-End</h5>
                <ul>
                  <li>Node.js, Express, MongoDB, Moongoose, OAtuh, SSL, SQL, PWA</li>
                </ul>
              </div>
            </div>
          </div>
         </div>
      </section>      


            {/* <Resume /> */}
        </div>  
    );

}

export default AboutPage;