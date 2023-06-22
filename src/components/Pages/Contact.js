import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",

    email: "",
    message: "",
  });
  return (
    <>
      <div class="containerCon">
        <header>
          <h2>
            <a href="#">
              <i class="ion-plane"></i> Katotravel
            </a>
          </h2>
          <nav>
            <ul>
              <li>
                <a href="#" title="Hotels">
                  Hotels
                </a>
              </li>
              <li>
                <a href="#" title="Flights">
                  Flights
                </a>
              </li>
              <li>
                <a href="#" title="Tours">
                  Tours
                </a>
              </li>
              <li>
                <a class="btn" href="#" title="Register / Log In">
                  Register/Log In
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div class="cover">
          <h1>Discover what's out there.</h1>
          <form class="flex-form">
            <label for="from">
              <i class="ion-location"></i>
            </label>
            <input type="text" placeholder="Enter E-Mail" />
            <input type="text" placeholder="Enter Mobile Number" />

            <textarea
              className="textarea"
              placeholder="Enter Comment"
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
          <div id="madeby">
            <span>
              Photo by{" "}
              <a href="https://unsplash.com/@benblenner" target="_blank">
                Ben Blennerhassett
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
