//para utilizar routing hacer antes en el proyecto npm install react-router-dom
// para el switch npm install react-switch
// tambien descargamos un framer para la animacion de elementos npm install framer motion
import React, { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import {
  BrowserRouter as Router,
  NavLink } from 'react-router-dom'
import AnimatedRoutes from "./componentes/animetedRoutes/AnimatedRoutes";
import emcLogo1 from './images/emcLogo1.png'
import emcLogo2 from './images/emcLogo2.png'

export const ThemeContext = createContext(null)

function App() {
  
  const [theme, setTheme] = useState('dark');
  const [showLinks, setShowLinks] = useState(false);


  const ToggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, ToggleTheme }}>
        <div className="App" id={theme}>
          <nav className="navegador">

            <div className="leftSide">
              {theme === 'dark' ? <img src={emcLogo1} alt='' style={{height:'80px'}} /> : <img src={emcLogo2} alt='' style={{height:'80px'}} />}
            </div>

            <div className="rightSide">

              <div className="botones" id={showLinks ? 'hidden' : ''}>
                <NavLink className="boton" onClick={() => showLinks ? setShowLinks(false): ''} to='/' activeclassname='active'>Home</NavLink>
                <NavLink className="boton" onClick={() => showLinks ? setShowLinks(false): ''} to='/about' activeclassname='active'>About</NavLink>
                <NavLink className="boton" onClick={() => showLinks ? setShowLinks(false): ''} to='/projects' activeclassname='active'>Projects</NavLink>
                <NavLink className="boton" onClick={() => showLinks ? setShowLinks(false): ''} to='/contact' activeclassname='active'>Contact</NavLink>

              </div>
                <hr/>
              <div className="boton-label-sw">
                <ReactSwitch
                  onChange={ToggleTheme} checked={theme === 'dark'} />
                  
                  <label>
                    {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                  </label>

                <FontAwesomeIcon
                  icon={faBars}
                  className="material-symbols-outlined fa-2x"
                  onClick={() => setShowLinks(!showLinks)}
                />

              </div>
            </div>

          </nav>

          <AnimatedRoutes tema={theme} />

        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
