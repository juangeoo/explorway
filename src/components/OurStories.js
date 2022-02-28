import React from 'react'
import "./OurStories.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const OurStories = () => {

  const slides = [
    {img:"slide_1.png", title:"Into the mountains", text:"United States of America - Colorado"},
    {img:"slide_2.png", title:"Life on an island", text:"Hawai - Honolulu"},
    {img:"slide_3.png", title:"Wildlife landscape", text:"Sydney - Australia"},
    {img:"slide_4.png", title:"Welcome to Asia", text:"Kashiwa - Japan"},
    {img:"slide_5.png", title:"Let's go camping", text:"Canada - Ontario"},
    {img:"slide_6.png", title:"Beach style", text:"Cancun - Mexico"},
    {img:"slide_7.png", title:"Life on the road", text:"United States of America - California"},
    {img:"slide_8.png", title:"Country roads", text:"Glasgow - Scotland"}];

  return (
    <section data-scroll-section className="ourstories">

    <div data-scroll className="ourstories__title">
        <li className="ourstories__title-li"><span>Our stories</span></li>
    </div>

    <Swiper
      spaceBetween={1}
      slidesPerView={4}
      watchSlidesProgress={true}
      initialSlide={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) =>
        <SwiperSlide key={index} data-scroll data-scroll-speed="10"  data-scroll-direction="horizontal" className="slide" style={{backgroundImage: `url(${slide.img})`}}>
          <div className="slide__info">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </SwiperSlide>
      )}
      
    </Swiper>

        <div className="ourstories__button header__button"><a>All stories</a></div>
    </section>
  )
}

export default OurStories