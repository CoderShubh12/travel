import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Carousel = ({ cards }) => {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 5,
    infinite: false,
  };

  console.log("cards", cards);
  return (
    <div>
      <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <h2 style={{ color: "black" }}>{card.country}</h2>
            <img
              alt={card.brand_id}
              src={card.photo1}
              width="300"
              height="200"
            />
            <p>{card.hotel_name}</p>

            <Link
              to={{
                pathname: `/roomdetails/${card.id}`,
                state: "hello",
              }}
            >
              <Button sx={{ marginleft: "50px" }} className="btn">
                Book Rooms
              </Button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
