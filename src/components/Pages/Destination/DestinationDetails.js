import { Grid, styled, Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import "./style.css";
import { useSelector } from "react-redux";

import noimage from "../../assets/no.jpg";

const DestinationDetails = () => {
  const [details, setDetails] = useState([]);
  const [description, setDescription] = useState([]);
  const params = useParams();
  const id = params.id;

  const { places } = useSelector((state) => state);
  console.log("places", places);

  useEffect(() => {
    axios.get(`http://localhost:8000/state/${id}`).then((response) => {
      setDescription(response.data);

      setDetails(response.data.tourist);
    });
  }, []);

  console.log("state", details);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 0.6,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Box
        className="body"
        style={{
          marginTop: "100px",
          marginLeft: "20px",
        }}
      >
        <Box>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {details.map((ele, index) => (
              <motion.li
                key={index}
                className="item"
                variants={item}
                whileTap={{ scale: 0.8 }}
              >
                <img
                  src={ele.images}
                  onError={(e) => {
                    e.target.src = noimage;
                    e.target.onError = null;
                  }}
                  alt="imf"
                  width="300px"
                  style={{ marginTop: "10px" }}
                ></img>
                <h3>{ele.name}</h3>
                <Typography>{ele.info.substring(0, 300)}</Typography>
              </motion.li>
            ))}
          </motion.ul>
        </Box>
      </Box>
    </>
  );
};

export default DestinationDetails;
