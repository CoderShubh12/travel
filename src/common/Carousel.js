import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const Carousel = ({cards}) => {
    const sliderSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      }
  return (
    <div > 
         <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <div key={index}>
            <h2 style={{ color:"white"}} >{card.title}</h2>
            <img  alt={card.title} src={card.imageSrc} width="600" height="300" />
            <p style={{ color:"white"}}>{card.description}</p>
            <ul style={{listStyle:"none", color:"white"}}>
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className='btn'>Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel