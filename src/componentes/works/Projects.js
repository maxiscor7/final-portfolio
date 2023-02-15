import React from "react";
import { motion } from 'framer-motion'
import mac from '../../images/mac.png'
import vidWeather from '../../assets/weather.mp4'
import vidFindFour from '../../assets/findFour.mp4'
import vidWebGym from '../../assets/webGym.mp4'

import weatherPic from '../../images/weatherPic.png'
import findFourPic from '../../images/findFourPic.png'
import gymPic from '../../images/gymPic.png'
import github from '../../images/github.png'
import web from '../../images/web.png'



import './Projects.css'
import { useState } from "react";

export default function Projects() {

    const [hoverPro1, setHoverPro1] = useState(false)
    const [hoverPro2, setHoverPro2] = useState(false)
    const [hoverPro3, setHoverPro3] = useState(false)




    return (
        <motion.div
            className="contenedor-works"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <motion.div 
            animate={{ x: 0 }}
            initial={{ x: '-220%' }}
            transition={{ delay: 0.1, duration: 2 }}
            className="container-proyect1">
                <div className='container-title-text-inside1'>
                    <h2>proyect weather app</h2>
                    <p>I work with react, redux and consume the data from an external api (openweathermap), and with geolocation, obtain the user's location (if allowed) and obtain the weather for the entire week in his location.</p>
                    <br />
                    <p>It also incorporates a city search bar where we can also view the weather in the week of that city</p>
                    <div className="container-divs-links-proyects" id="project1-container-links">
                        <div className="container-proyects-git">
                            <a href="https://github.com/maxiscor7/clima-App" target='_blank' rel="noreferrer"><img src={github} alt="" /></a>
                        </div>
                        <div className="container-proyects-web">
                            <a href="https://clima-app-tnkt.vercel.app/" target='_blank' rel="noreferrer" ><img src={web} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div
                    className="container-img-laptop-video"
                    onMouseEnter={() => setHoverPro1(true)}
                    onMouseLeave={() => setHoverPro1(false)}
                >
                    <div className="container-mac">
                        <img src={mac} alt="" />
                    </div>
                    <div className="container-pic-static">
                        {hoverPro1 ? <video src={vidWeather} alt='' autoPlay loop muted /> : <img src={weatherPic} alt='' />}
                    </div>

                </div>

                <div className="container-tec-library-text">
                    <h3>It was made with:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>API OpenWeatherMap</li>
                        <li>Geolocation</li>
                    </ul>
                </div>

            </motion.div>

            <motion.div 
            initial={{ x: '200%' }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 2 }}
            className="container-proyect2">
                <div className='container-title-text-inside1'>
                    <h2>proyect Connect 4</h2>
                    <p>I recreated the connect 4 game from scratch, it contains two game modes, player vs player and player vs machine.</p>
                    <br />
                    <p>It started as a challenge from the rviewer company, and ended up becoming a project that I really enjoyed doing.</p>
                    <div className="container-divs-links-proyects">
                        <div className="container-proyects-git">
                            <a href="https://github.com/maxiscor7/find-four" target='_blank' rel="noreferrer" ><img src={github} alt="" /></a>
                        </div>
                        <div className="container-proyects-web">
                            <a href="https://find-four.vercel.app/" target='_blank' rel="noreferrer" ><img src={web} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div
                    className="container-img-laptop-video"
                    onMouseEnter={() => setHoverPro2(true)}
                    onMouseLeave={() => setHoverPro2(false)}
                >
                    <div className="container-mac">
                        <img src={mac} alt="" />
                    </div>
                    <div className="container-pic-static">
                        {hoverPro2 ? <video src={vidFindFour} alt='' autoPlay loop muted /> : <img src={findFourPic} alt='' />}
                    </div>

                </div>

                <div className="container-tec-library-text">
                    <h3>It was made with:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>


                    </ul>
                </div>

            </motion.div>

            <motion.div 
            animate={{ x: 0 }}
            initial={{ x: '-220%' }}
            transition={{ delay: 2, duration: 2 }}
            className="container-proyect3">
                <div className='container-title-text-inside1'>
                    <h2>Proyect Website</h2>
                    <p>
                        This was my first deployed project, which tries to recreate the website of a popular gym in my area but with different color palettes, it is completely responsive.</p>
                    <div className="container-divs-links-proyects">
                        <div className="container-proyects-git">
                            <a href="https://github.com/maxiscor7/gym-spa-maxi" target='_blank' rel="noreferrer"><img src={github} alt="" /></a>
                        </div>
                        <div className="container-proyects-web">
                            <a href="https://gym-spa-maxi.vercel.app/" target='_blank' rel="noreferrer" ><img src={web} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div
                    className="container-img-laptop-video"
                    onMouseEnter={() => setHoverPro3(true)}
                    onMouseLeave={() => setHoverPro3(false)}
                >
                    <div className="container-mac">
                        <img src={mac} alt="" />
                    </div>
                    <div className="container-pic-static">
                        {hoverPro3 ? <video src={vidWebGym} alt='' autoPlay loop muted /> : <img src={gymPic} alt='' />}
                    </div>

                </div>

                <div className="container-tec-library-text">
                    <h3>It was made with:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>


                    </ul>
                </div>

            </motion.div>


        </motion.div>
    )
}