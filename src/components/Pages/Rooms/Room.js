import React, { useEffect, useState } from "react";
import "./room.css";
import SingleRoom from "./SingleRoom";
import axios from "axios";

const Room = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [hotelName, setHotelName] = useState([]);

  const [cards, setCards] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here
    console.log("Form submitted:", {
      name,
      email,
      checkInDate,
      checkOutDate,
      hotelName,
    });

    axios.post("http://localhost:8000/bookedrooms", {
      name,
      email,
      checkInDate,
      checkOutDate,
      hotelName,
    });

    // Reset form fields
    setName("");
    setEmail("");
    setCheckInDate("");
    setCheckOutDate("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/hotelData");
      console.log(res.data);
      setCards(res.data);
    };
    fetchData();
  }, []);

  const handleSelectHotel = (e) => {
    const selectedHotelDetail = cards.find(
      (hotel) => hotel.id === Number(e.target.value)
    );
    console.log(selectedHotelDetail);

    // const res = axios.get(
    //   `http://localhost:8000/hotelData/hotel_name=${e.target.value}`
    // );
    // console.log(res, "selected hotel");
    // setHotelName(res);
  };

  return (
    <>
      <div className="room-booking-bg">
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="name">Select Hotel:</label>
          <select
            placeholder="select hotels"
            onChange={handleSelectHotel}
            value={hotelName}
            name="hotelName"
          >
            {cards.map((item) => (
              <option value={item.id}>{item.hotel_name}</option>
            ))}
          </select>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="check-in">Check-in Date:</label>
          <input
            type="date"
            id="check-in"
            value={checkInDate}
            onChange={(event) => setCheckInDate(event.target.value)}
            required
          />

          <label htmlFor="check-out">Check-out Date:</label>
          <input
            type="date"
            id="check-out"
            value={checkOutDate}
            onChange={(event) => setCheckOutDate(event.target.value)}
            required
          />

          <button type="submit">Book Room</button>
        </form>
      </div>
      <SingleRoom cards={cards} />
    </>
  );
};

export default Room;
