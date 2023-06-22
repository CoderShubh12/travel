import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import travel1 from "../assets/travel1.jpg";
import React from "react";

import travel3 from "../assets/travel3.jpg";
import img2 from "../assets/img2.jpg";

import "./banner.css";

const Banner = () => {
  return (
    <>
      <Parallax
        pages={3.5}
        style={{ top: "0", left: "0", background: "black", opacity: "0.8" }}
      >
        <ParallaxLayer
          offset={0}
          speed={0.25}
          style={{
            backgroundImage: `url(${travel3})`,
            backgroundSize: "cover",
          }}
        >
          <div id="one"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0.3}>
          <div></div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0.5} speed={-0.1} style={{ color: "white" }}>
          <div>
            <h1>Travel the World. Make a Difference.</h1>
            <p>
              {" "}
              Earthwatch expeditions pair researchers with volunteers to address
              some of the world’s most pressing environmental challenges.
              Explore our current expeditions to discover how you can make a
              difference.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.35}
          style={{
            backgroundImage: `url(${travel1})`,
            backgroundSize: "cover",
          }}
        >
          <div></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0.3}>
          <div></div>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={2}
          speed={0.35}
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
          }}
        >
          <div></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.35} style={{ color: "white" }}>
          <div>
            <h1>Our Mission & Values</h1>
            <p>
              Earthwatch connects people with scientists worldwide to conduct
              environmental research and empowers them with the knowledge they
              need to conserve the plan
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{
            display: "inline-flex",
            justifyContent: "space-between",
            color: "white",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <div className="contact">
            <h1>Contact me</h1>
          </div>
          <div className="navigation">
            <h1>Navigation</h1>
            <div style={{ listStyle: "none" }}>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li></li>
              </ul>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Banner;
