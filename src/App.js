import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Pricing from "./components/Pages/Pricing";
import Navbar from "./components/Home/Navbar";
import Room from "./components/Pages/Rooms/Room";
import Login from "./components/login/Login";
import RoomBooking from "./components/Pages/Rooms/RoomBooking";
import Destination from "./components/Pages/Destination/Destination";
import { Skeleton } from "@mui/material";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./components/Home/HomePage";
import PageNotFound from "./components/Pages/PageNotFound";
import DestinationDetails from "./components/Pages/Destination/DestinationDetails";

const Home = React.lazy(() => import("./components/Home/HomePage"));

function App() {
  return (
    <div className="App">
      <Navbar hasError={true} />
      <Suspense
        fallback={
          <Skeleton
            variant="rectangular"
            width={800}
            height={400}
            sx={{ margin: "auto", marginTop: "100px" }}
          ></Skeleton>
        }
      >
        <Routes>
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/rooms" element={<ProtectedRoute Component={Room} />} />
          <Route path="/roomdetails/:id" element={<RoomBooking />} />
          <Route
            path="/destinations"
            element={<ProtectedRoute Component={Destination} />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<DestinationDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
