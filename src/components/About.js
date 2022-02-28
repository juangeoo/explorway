import React from 'react'
import "./About.scss"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="about" data-scroll data-scroll-section>
       <div data-scroll className="about__topitems">
         <div className="about__topitems-text">
          <div data-scroll className="ourstories__title">
               <li className="ourstories__title-li about__topitems-text-li"><span>About us</span></li>
          </div> 
            <motion.p initial={{opacity:0, y:200}} whileInView={{ opacity: 1, y:0}} transition={{duration: .5, delay:.5}} className="about__topitems-text-p">
            Explorway redefines travel. Its about searching for greater peaks,
            richer connections, and deeper understanding. With expertly curated experiences for passionate travelers,
             you will explore regions beyond your wildest dreams - from breathtaking cultural excursions to thrilling performance events.
            </motion.p>
          </div>

          <div className="about__topitems-image">
          
          <motion.img initial={{opacity:0, y:200}} whileInView={{ opacity: 1, y:0}} transition={{duration: .5, delay:.5}} src="africa1.png"></motion.img>

          <motion.div   initial={{opacity:0, y:200}} whileInView={{ opacity: 1, y:0}} transition={{duration: .5, delay:.5}} className="header__button about__topitems-image-a">
            <a>Read about us</a>
          </motion.div>

          </div>
       </div>

    </section>
  )
}

export default About