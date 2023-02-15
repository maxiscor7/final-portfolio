import React from "react";
import { motion } from 'framer-motion'
import FormContact from './comp-contact/FormContact'
import './Contact.css';
import ContactMap from "./comp-contact/ContactMap";
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import cv from '../../assets/cv.pdf'

export default function Contact() {

  return (
    <motion.div
      className="contenedor-contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
    >
      <div className='container-contact'>
        <div className='left'>

          <motion.div
            className="left-inside-left"
            animate={{ x: 0 }}
            initial={{ x: '-220%' }}
            transition={{ delay: 0.1, duration: 2 }}
          >
            <FormContact />
          </motion.div>

          <motion.div
            className="left-inside-right"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <div className="container-icons">
              <a href="https://github.com/maxiscor7" target='_blank' rel="noreferrer"><img src={github} alt="" /></a>
              <a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target='_blank' rel="noreferrer"><img src={linkedin} alt="" /></a>
              <div className="cv-container">
                <a href={cv} download='Resume'>
                  <button>CV</button>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
        <motion.div
          className='right'
          initial={{ x: '200%' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 2 }}
        >
          <ContactMap />
        </motion.div>
      </div>


    </motion.div>

  )
}

