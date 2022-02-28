import React from 'react'
import "./Footer.scss"
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <section data-scroll-section className="footer">
    <div className="footer__div">
        <p className="footer__div-hl"> © 2022 Explorway</p>
    </div>

    <div className="footer__div">
        <a>Destinations</a>
        <a>Trips</a>
        <a>About us</a>
        <a>Stories</a>
        <a>Journal</a>
        <a>FAQ</a>
    </div>

    <div className="footer__div">
        <a>Instagram</a>
        <a>TikTok</a>
        <a>Facebook</a>
        <a>Linkedin</a>
    </div>

    <div className="footer__div">
        <a>Terms and Conditions</a>
        <a>Privacy Policy</a>
    </div>

    </section>
  )
}

export default Footer