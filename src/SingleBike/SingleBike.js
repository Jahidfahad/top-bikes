import React from 'react';
import { Card, CardImg, Col, Container, Row } from 'react-bootstrap';
import './SingleBike.css'
const SingleBike = (props) => {
    const{name, price,img, topSpeed, brake, brand} = props.bike;
    return (
        
            <div className='bike'>
                  <img src={img} alt="" />
                  <h2>{name}</h2>
                  <h3>Brand: {brand}</h3>
                  <h4>Price: {price}/= BDT</h4>
                  <h4>Top-Speed: {topSpeed}</h4>
                  <h5>Brake: {brake}</h5>
                  <button onClick={() => props.handleBike(props.bike)} className="btn">Add to Cart</button>

            </div>
                       
                   

     
    );
};

export default SingleBike;