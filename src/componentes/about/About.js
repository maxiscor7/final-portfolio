import React from "react";
import { motion } from 'framer-motion'
import './About.css';
import htmlLogo from '../../images/html.png'
import cssLogo from '../../images/css.png'
import javascriptLogo from '../../images/javascript.png'
import reactLogo from '../../images/react.png'
import reduxLogo from '../../images/redux.png'

import nodeJsLogo from '../../images/nodeJs.png'
import expressLogo from '../../images/express.png'
import sequelizeLogo from '../../images/sequelize.png'
import postgreSqlLogo from '../../images/postgreSQL.png'

import gitLogo from '../../images/git.png'
import thunderClientLogo from '../../images/thundeClient.png'
import canva from '../../images/canva.png'

import splineLogo from '../../images/spline.png'
import threeJsLogo from '../../images/threeJs.png'
import typescriptLogo from '../../images/typescript.png'
import framerMotionLogo from '../../images/framerMotion.png'
import jest from '../../images/rm-jest.png'
import bootstrap from '../../images/rm-bootstrap.png'
import tailwind from '../../images/rm-tailwind.png'
import figma from '../../images/rm-figma.png'
import github from '../../images/github.png'
import postman from '../../images/rm-postman.png'





export default function About() {
  return (
    <motion.div
      className="container-skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        className="container-skills-legend"
        initial={{ y: '-120%' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 2 }}
      >
        <h1>About</h1>
        <div className="container-legend">

          <div className="legend-left">
            <div className="container-h2-legend">
              <h2 >My name is Enrique Maximiliano Cornalba</h2>
              <br />
              <h3>I'm a Front-end web developer,<br /> based in Buenos Aires Argentina.</h3>
            </div>

            <div>
              <p>High school degree in Professional
                and Personal Informatics in Leonardo
                Murialdo Institute</p>
              <br />
              <p>Graduated bootcamp <a href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=brand&gclid=CjwKCAiA85efBhBbEiwAD7oLQLJDaC1V0KG85etlbF8U4j2EiibP6BWSB2_rqKHT6sBt9H_HSvy5ZBoCqVQQAvD_BwE" target='_blank' rel="noreferrer" >Henry</a></p>
              <br />
              <p>ENGLISH: C2 Proficient. <a href="https://www.efset.org/cert/Hy8NPz" target='_blank' rel="noreferrer" >EF SET Certificate</a></p>
              <br />
              <p>
                Currently I am more focused on Front-end development with HTML, CSS, JS and REACT, creating small and medium web applications, features, animations and coding interactive designs, but also developing backend projects using Node.js, Express, Sequelize, PostgreSQL</p>
              <br />
              <p>Since I started to delve into the world of programming it has been an incredible journey in which I have learned a lot and I still have a lot to learn and continue to develop my skills.</p>
              <br />
              <p>This portfolio was made with : HTML, CSS, Javascript, React</p>
              <br />
              <p>Libraries that I use: Framer Motion, TypewriterJS v2, Leaflet, Emailjs, Sweetalert 2</p>
              <br />
              <p>Other tools: Figma, Canva, Git</p>

            </div>
          </div>

          <div className="legend-right">
            <div className="container-header-skill">
              <h2>Skills</h2>
            </div>

            <div className="skill-frontend">
              <h3>Front-end</h3>

              <div className="container-groupe-skill-front">

                <div className="front-skill-1">
                  <img src={htmlLogo} alt="" />
                  <p>HTML</p>
                </div>
                <div className="front-skill-2">
                  <img src={cssLogo} alt="" />
                  <p>CSS</p>
                </div>
                <div className="front-skill-3">
                  <img src={javascriptLogo} alt="" />
                  <p>Javascript</p>
                </div>
                <div className="front-skill-4">
                  <img src={reactLogo} alt="" />
                  <p>React</p>
                </div>
                <div className="front-skill-5">
                  <img src={reduxLogo} alt="" />
                  <p>Redux</p>
                </div>
                <div className="front-skill-6">
                  <img src={typescriptLogo} alt="" />
                  <p>Typescript</p>
                </div>
                <div className="front-skill-7">
                  <img src={jest} alt="" />
                  <p>Jest</p>
                </div>
                <div className="front-skill-8">
                  <img src={bootstrap} alt="" />
                  <p>Bootstrap</p>
                </div>
                <div className="front-skill-9">
                  <img src={tailwind} alt="" />
                  <p>Tailwind</p>
                </div>

              </div>

            </div>

            <div className="divide"></div>

            <div className="skill-backend">
              <h3>Back-end</h3>

              <div className="container-groupe-skill-back">

                <div className="back-skill-5">
                  <img src={thunderClientLogo} alt="" />
                  <p>Thunder Client</p>
                </div>
                <div className="back-skill-6">
                  <img src={postman} alt="" />
                  <p>Postman</p>
                </div>
                <div className="back-skill-1">
                  <img src={nodeJsLogo} alt="" />
                  <p>Node.JS</p>
                </div>
                <div className="back-skill-2">
                  <img id="express" src={expressLogo} alt="" />
                  <p>Express</p>
                </div>
                <div className="back-skill-3">
                  <img src={sequelizeLogo} alt="" />
                  <p>Sequelize</p>
                </div>
                <div className="back-skill-4">
                  <img src={postgreSqlLogo} alt="" />
                  <p>PostgreSQL</p>
                </div>

              </div>

            </div>

            <div className="divide"></div>

            <div className="skill-others">
              <h3>Others</h3>

              <div className="container-groupe-skill-other">

                <div className="other-skill-1">
                  <img src={gitLogo} alt="" />
                  <p>Git</p>
                </div>
                <div className="other-skill-3">
                  <img src={canva} alt="" />
                  <p>Canva</p>
                </div>
                <div className="other-skill-4">
                  <img src={figma} alt="" />
                  <p>Figma</p>
                </div>
                <div className="other-skill-5">
                  <img src={github} alt="" />
                  <p>GitHub</p>
                </div>
              </div>

            </div>

            <div className="divide"></div>

            <div className="skill-learning">
              <h3>Learning</h3>

              <div className="container-groupe-skill-learning">

                <div className="learning-skill-2">
                  <img src={framerMotionLogo} alt="" />
                  <p>Framer Motion</p>
                </div>
                <div className="learning-skill-3">
                  <img src={threeJsLogo} alt="" />
                  <p>Three.JS</p>
                </div>
                <div className="learning-skill-4">
                  <img src={splineLogo} alt="" />
                  <p>Spline</p>
                </div>
              </div>

            </div>

          </div>


        </div>
      </motion.div>

    </motion.div>
  )
}