import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

import { useSpring, animated } from "react-spring";
import "./card.css";
import { Button, Box, Typography, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPlaces } from "../../../feature/slice/placeSlice";

const Destination = () => {
  const [departure, setDeparture] = useState("");
  const [flights, setFlights] = useState();
  const [filterText, setFilterText] = useState("");
  const [filterTextto, setFilterTextto] = useState("");
  const [dispalyData, setDisplayData] = useState([""]);
  const [intervalState, setIntervalState] = useState();

  const destinations = useSelector((state) => state.places);

  // const [places, setplaces] = useState([]);
  useEffect(() => {
    dispatch(fetchPlaces());
    // setplaces(destinations.data);
  }, []);
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  });

  const dispatch = useDispatch();

  const data = destinations?.data?.map((ele) => {
    return {
      key: ele.id,
      content: (
        <Card src={ele.img[1]} name={ele.name} about={ele.about} id={ele.id} />
      ),
    };
  });

  const slides = data?.map((item, index) => {
    return { ...item, onClick: () => setState({ goToSlide: index }) };
  });
  const handleSubmit = () => {};

  useEffect(() => {
    axios
      .get("http://localhost:8000/flights")
      .then((response) => setFlights(response.data));
  }, []);

  const searcHfrom = (e) => {
    setFilterText(e.target.value.toLocaleLowerCase());

    const filteredItems = flights.filter((item) =>
      item.city.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
    );
    if (intervalState) {
      clearTimeout(intervalState);
    }
    const setSearchInterval = setTimeout(() => {
      if (filteredItems.length === 1) {
        setFilterText(filteredItems[0].city);
      }
    }, 1000);
    setIntervalState(setSearchInterval);
    setDisplayData(filteredItems);
  };
  const searcHTo = (e) => {
    setFilterTextto(e.target.value.toLocaleLowerCase());

    const filteredItems = flights.filter((item) =>
      item.city.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
    );
    if (intervalState) {
      clearTimeout(intervalState);
    }
    const setSearchInterval = setTimeout(() => {
      if (filteredItems.length === 1) {
        setFilterTextto(filteredItems[0].city);
      }
    }, 1000);
    setIntervalState(setSearchInterval);
    setDisplayData(filteredItems);
  };

  console.log(flights);
  return (
    <>
      <div className="flight-booking">
        <div className="flight-booking-container">
          <div className="flight-booking-item item ">
            <input
              placeholder="From"
              className="flight-booking-input"
              type="text"
              id="name"
              value={filterText}
              onChange={searcHfrom}
              required
            />
          </div>

          <div className="flight-booking-item item">
            {" "}
            <input
              placeholder="To"
              className="flight-booking-input"
              type="text"
              id="name"
              value={filterTextto}
              onChange={searcHTo}
              required
            />
          </div>
          <div className="flight-booking-item item">
            {" "}
            <input
              className="flight-booking-input"
              placeholder="Departure"
              type="date"
              id="name"
              value={departure}
              onChange={(event) => setDeparture(event.target.value)}
              required
            />
          </div>
          <div className="flight-booking-item item">
            {" "}
            <input
              className="flight-booking-input"
              placeholder="Return Date"
              type="date"
              id="name"
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="flight-booking-item item">
            {" "}
            <input
              className="flight-booking-input"
              placeholder="Number of travellers"
              type="text"
              id="name"
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="flight-booking-button">
          <button class="button-24" role="button">
            Submit
          </button>
        </div>
      </div>

      <div>
        <div className="display-data">
          {dispalyData.map((item, idx) => (
            <div key={idx}>{item.city}</div>
          ))}
        </div>
        <Box style={{ marginTop: "100px" }}>
          <h2>Trending destinations</h2>
        </Box>
        <Typography>Most popular choices for travellers from India</Typography>
      </div>
      {destinations?.data?.length > 0 && (
        <>
          <div style={{ marginTop: "250px" }}>
            <Carousel
              slides={slides}
              goToSlide={state.goToSlide}
              offsetRadius={state.offsetRadius}
              showNavigation={state.showNavigation}
              animationConfig={state.config}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Destination;

const Card = ({ src, name, about, id }) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <>
      <Box sx={{ marginTop: "200px" }}>
        <animated.div
          className="card"
          style={props3}
          onMouseEnter={() => setShown(true)}
          onMouseLeave={() => setShown(false)}
        >
          <img src={src} alt="" />
          <h2>{name}</h2>
          <p>{about.substring(0, 150)}</p>
          <div>
            <Link
              to={{
                pathname: `/details/${id}`,
                state: "hello",
              }}
            >
              <Button>See More</Button>
            </Link>
            <Button>Book</Button>
          </div>
        </animated.div>
      </Box>
    </>
  );
};
