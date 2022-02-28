import React from 'react'
import "./Contact.scss"
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="contact" data-scroll-section>
    
        <div className="contact__info">
            <motion.p initial={{opacity:0, y:200}} whileInView={{ opacity: 1, y:0}} transition={{duration: .5, delay:.5}} className="contact__info-p">Any questions?</motion.p><br></br>
            <motion.p initial={{opacity:0, y:200}} whileInView={{ opacity: 1, y:0}} transition={{duration: .5, delay:.6}} className="contact__info-p">Our team is ready to guide you.</motion.p>
        </div>
        
        <motion.div initial={{opacity:0, y:200}} whileInView={{ opacity: 1, y:0}} transition={{duration: .5, delay:.7}} className="header__button contact__button">
            <a>Read about us</a>
          </motion.div>

    </section>
  )
}

export default Contact