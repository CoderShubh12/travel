import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import travel1 from "../assets/travel1.jpg";

import travel3 from "../assets/travel3.jpg";
import img2 from "../assets/img2.jpg";

import "./banner.css";
import {  Typography } from "@mui/material";

const Banner = () => {
    const ref = useRef();
  return (
      <>

    
      <Parallax pages={3} style={{ top: "0", left: "0", background: "black" }} ref={ref}>
        <ParallaxLayer offset={0.1} speed={2.5} factor={2} style={{backgroundImage:`url(${travel3})`, backgroundSize:"cover"}}>
       
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          sticky={{ start: 0, end: 1 }}
          style={{ top: "300px" }}
        >
          <h1 style={{ color: "white" }}>Welcome to the Columbiana Area!</h1>
          <Typography sx={{ color: "white" }}>
            We are known for our friendly, small town heart. In October of 2019,
            we were even voted by Reader’s Digest as “The Nicest Place in
            America!” Come visit our unique specialty shops, antique stores,
            historic sites, farmers markets, and quaint restaurants. You will
            find a lot to do throughout the year.
          </Typography>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2.5}    onClick={() => ref.current.scrollTo(0)}>
          <img className="img1" alt="img1" src={travel1} width="100%"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2.5}>
          <img className="img3" alt="img3" src={img2}></img>
          
        </ParallaxLayer>

    

      </Parallax>
    </>
  );
};

export default Banner;
