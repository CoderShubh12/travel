import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomBooking = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const hotel_id = params.id;
  console.log("id", hotel_id);
  console.log(data);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/hotelData/${hotel_id}`)
      .then((response) => {
        // setDescription(response.data);

        setData(response.data);
      });
  }, []);

  return <div>RoomBooking</div>;
};

export default RoomBooking;
