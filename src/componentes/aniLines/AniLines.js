import './AniLines.css'
import { motion } from 'framer-motion'

const AniLines = ({ isShown, tema }) => {

    const textMotion = {
        open: { opacity: 1,  y: 0},
        closed:{ 
             y: '90%' ,
             transition:{ delay: 0.2, duration: 1 },
             
        }
    }
    const drawMotion = {
        open: { opacity: 1,  x: 0},
        closed:{ 
             x: '75%' ,
             transition:{ delay: 0.1, duration: 0.5 },            
        }
    }


    return (
        <motion.div
            className='line-and-borderLinks-draw'
        >
            <div className='prueba'>
                <motion.div
                    animate={!isShown ? "open" : "closed"}
                    variants={textMotion}
                    className='h1-hoverMe'>
                    <h1>Hey, i'm over here !</h1>
                </motion.div>
            </div>

            {isShown ?
                <motion.div 
                animate={!isShown ? "open" : "closed"}
                variants={drawMotion}
                className='prueba2'>
                    <div className='line-draw'>
                        <svg id='line' width="230" height="230" viewBox="0 0 90 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path strokeWidth='2' d="M22.5 0.5C24.3397 16.2891 18 32.5 9.49994 45.5C0.999896 58.5 -0.959472 74 2.50001 90C5.95948 106 23.9999 122 39.4999 125.5C54.9999 129 89.4999 128.5 89.4999 100" stroke={tema === 'light' ? 'black' : 'white'} />
                        </svg>

                    </div>

                    <div

                        className='border-links-draw-infinite'>
                        <svg
                            id='logo'
                            width="170" height="170" viewBox="0 0 101 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_6_9" fill="none">
                                <path
                                    stroke='white'
                                    strokeWidth='2'
                                    d="M0 7C0 3.13401 3.13401 0 7 0H94C97.866 0 101 3.13401 101 7V29C101 32.866 97.866 36 94 36H7C3.134 36 0 32.866 0 29V7Z" />
                            </mask>
                            <path d="M-1 7C-1 2.58172 2.58172 -1 7 -1H94C98.4183 -1 102 2.58172 102 7H100C100 3.68629 97.3137 1 94 1H7C3.68629 1 1 3.68629 1 7H-1ZM102 29C102 33.4183 98.4183 37 94 37H7C2.58172 37 -1 33.4183 -1 29H1C1 32.3137 3.68629 35 7 35H94C97.3137 35 100 32.3137 100 29H102ZM7 37C2.58172 37 -1 33.4183 -1 29V7C-1 2.58172 2.58172 -1 7 -1V1C3.68629 1 1 3.68629 1 7V29C1 32.3137 3.68629 35 7 35V37ZM94 -1C98.4183 -1 102 2.58172 102 7V29C102 33.4183 98.4183 37 94 37V35C97.3137 35 100 32.3137 100 29V7C100 3.68629 97.3137 1 94 1V-1Z" fill={tema === 'light' ? 'black' : 'white'} mask="url(#path-1-inside-1_6_9)" />
                        </svg>
                    </div>
                </motion.div>
                : ''}

        </motion.div>
    )



}
export default AniLines