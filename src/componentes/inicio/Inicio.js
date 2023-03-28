import React from "react";
import './Inicio.css'
import { useState } from "react";
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import AniLines from "../aniLines/AniLines";

import avatar from '../../images/avatar.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import insta from '../../images/insta.png'


export default function Inicio({ tema }) {


    const [isShown, setIsShown] = useState(false)

    return (
        <motion.div
            className="contenedor-inicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container-all-text">
                <div className='inicio-first-h1'>
                    <motion.h1
                        animate={{ y: 0 }}
                        initial={{ y: '100%' }}
                        transition={{ delay: 0.5, duration: 0.5 }}

                    >Hi There! </motion.h1>
                </div>
                <div className='inicio-second-h1'>
                    <div className="container-im">
                        <motion.h1
                            animate={{ x: 0 }}
                            initial={{ x: '-120%' }}
                            transition={{ delay: 1.0, duration: 1.5 }}

                        >I'm </motion.h1>
                    </div>
                    <div className="container-maxi">
                        <motion.h1
                            animate={{ y: 0 }}
                            initial={{ y: '-100%' }}
                            transition={{ delay: 1.0, duration: 1.5 }}

                        > Maxi</motion.h1>
                    </div>

                </div>
                <div className='text-writer'>
                    <Typewriter

                        options={{ delay: 25 }}
                        onInit={(e) => {
                            e.pauseFor(3500)
                                .typeString(`I'm a Front-end web Developer`)
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('I hope we can work together')
                                .start()
                        }}
                    />
                </div>

            </div>

            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1 }}
                    exit={{ opacity: 0 }}
                    className="container-sphere-pic"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <div className="container-front-pic">
                        <img src={avatar} alt="" />
                    </div>
                        
                    <AniLines isShown={isShown} tema={tema} />

                    {!isShown ? '' :
                        <div className="hiden-text">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <div className="text-interact-inicio">

                                    <div className="dialog-1">
                                        <div className="left-point"></div>
                                    </div>

                                    <div className="text-dialog">
                                        <p>
                                            Hey! how are you?
                                            <br />
                                            <br />
                                            Thank you for visiting my portfolio, if you want to contact me or have any questions, I leave you the links below.</p>
                                    </div>

                                </div>
                                <div className="container-logos-social-links">
                                    <a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target='_blank' rel="noreferrer"><img src={linkedin} alt="" /></a>
                                    <a href="https://github.com/maxiscor7" target='_blank' rel="noreferrer"><img src={github} alt="" /></a>
                                    <a href="https://www.instagram.com/cornalbamaxi/" target='_blank' rel="noreferrer"><img src={insta} alt="" /></a>
                                </div>

                            </motion.div>
                        </div>}
                </motion.div>
            </div>

        </motion.div>
    )
}