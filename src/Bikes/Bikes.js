import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react/cjs/react.development";
import Cart from "../Cart/Cart";
import SingleBike from "../SingleBike/SingleBike";
import "./Bikes.css";
const Bikes = () => {
  const [bike, setBike] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("../data.JSON")
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, []);

  let total = 0;
  
  const handleBike = (bike) =>{
    const newCart = [...cart, bike]
    setCart(newCart)
        
  }
  return (
    <div className="main-bike">
      <div className="single-bike">
      {bike.map((bike) => (
        <SingleBike handleBike={handleBike} bike={bike}></SingleBike>
      ))}
      </div>

      <div className="bike-cart">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Bikes;
