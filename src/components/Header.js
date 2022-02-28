import React from 'react'
import "./Header.scss"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <section data-scroll-section className="header">
        <motion.div initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:.7, delay:1.3}} data-scroll className="header__navbar">
            <span data-scroll>Destinations</span>
            <span data-scroll>Trips</span>
            <span data-scroll><img src="menu.svg"></img></span>
        </motion.div>

        <div data-scroll className="header__hero">
            <div data-scroll>
            <motion.div  data-scroll initial={{y:400}} animate={{y:[400, 300,  0]}} transition={{duration:2}} className="header__title">
                <motion.h1 data-scroll initial={{y:-200, scale:.5}} animate={{y: [-200, 0, 20], scale:[.5, .5, 1] }} transition={{duration:2}}>Explorway</motion.h1> 
            </motion.div>
            <div data-scroll className="header__p">
                 <motion.p data-scroll initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:.7, delay:1.3}}>
                     Creating unique travel experiences</motion.p> <br></br>
                     
                     <motion.p data-scroll initial={{y:100, opacity:0}} animate={{y:-15, opacity:1}} transition={{duration:.7, delay:1.35}}>
                    without damaging the planet.</motion.p>
            </div>
           </div>
           
        </div>

        <motion.img initial={{y:500, opacity:0}} animate={{y:50, opacity:1}} transition={{duration:2, delay:2}} data-scroll data-scroll-speed="5" className="header__heroimg1" src="hero_1.png"></motion.img>
        <motion.img initial={{y:500, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:2, delay:2}} data-scroll data-scroll-speed="5" className="header__heroimg2" src="hero_2.png"></motion.img>
        <img data-scroll data-scroll-speed="20" className="header__heroimg3" src="hero_2.png"></img>

        <motion.div initial={{y:100, opacity:0}} animate={{y:-15, opacity:1}} transition={{duration:.7, delay:1.35}} data-scroll className="header__button">
           <a>Explore destinations</a>
        </motion.div>

    </section>
  )
}

export default Header