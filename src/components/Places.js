import React from 'react'
import "./Places.scss"

const Places = () => {

    const places = [
        {name:"Africa", country1:"Kenya", country2: "Uganda", country3: "Kenya", country4: "South Africa", text:"Travelers come to Africa primarily for wildlife viewing opportunities or to climb Kilimanjaro, and while Africa offers some of the best wildlife viewing opportunities, there are so many more reasons to visit Africa.",
        img1:"africa1.png", img2:"africa2.png", img3:"africa3.png"},
        {name:"Asia", country1:"Japan", country2: "China", country3: "India", country4: "South Korea", text:"Travelers come to Africa primarily for wildlife viewing opportunities or to climb Kilimanjaro, and while Africa offers some of the best wildlife viewing opportunities, there are so many more reasons to visit Africa.",
        img1:"asia1.png", img2:"asia2.png", img3:"asia3.png"},
        {name:"America", country1:"United States", country2: "Mexico", country3: "Colombia", country4: "Brasil", text:"Travelers come to Africa primarily for wildlife viewing opportunities or to climb Kilimanjaro, and while Africa offers some of the best wildlife viewing opportunities, there are so many more reasons to visit Africa.",
        img1:"america1.png", img2:"america2.png", img3:"america3.png"},
        {name:"Europe", country1:"United Kingdom", country2: "Spain", country3: "France", country4: "Italy", text:"Travelers come to Africa primarily for wildlife viewing opportunities or to climb Kilimanjaro, and while Africa offers some of the best wildlife viewing opportunities, there are so many more reasons to visit Africa.",
        img1:"europe1.png", img2:"europe2.png", img3:"europe3.png"},
    
    ]
    

  return (
    <section className="places" data-scroll-section>
        <div data-scroll className="ourstories__title">
        <li className="ourstories__title-li"><span>Join the adventure</span></li>
    </div> 

    <div>
    {places.map((place, index) =>
        <div key={index} className="place-container">
            <p>{place.name}</p>
         <div className="places__ul">
             <li className="places__ul-li">{place.country1}</li>
             <li className="places__ul-li">{place.country2}</li>
             <li className="places__ul-li">{place.country3}</li>
             <li className="places__ul-li">{place.country4}</li>
         </div>

         
             <p className="places__text">{place.text}</p>
         

        <div className="places__button-container">
             <a href="" className="places__button">Explore trips</a>
             <a href="" className="places__button places__button-2">Read stories from {place.name}</a>
        </div>

        <img src={place.img1} className="img_place img_place-1"></img>
        <img src={place.img2} className="img_place img_place-2"></img>
        <img src={place.img3} className="img_place img_place-3"></img>

        </div>
      )}
    </div>

      <div className="img_full">
        
        <img src="section1.png"></img>

      </div>

    </section>
  )
}

export default Places