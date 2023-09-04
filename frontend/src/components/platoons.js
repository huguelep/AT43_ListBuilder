import React, { useState, useEffect } from 'react';
import {Card} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import '../static/css/grid.css';

function Platoons() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/platoons/')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
    .catch((err) => {
      console.log(err.message);
    })
  }, []);

  const location = useLocation();
  console.log(location.state);

  const renderCard = (card, index) => {
    return (
      <div onClick={() => alert("Hello from here")}>
      <Card className="box" key={index}>
        <Card.Body>
          <Card.Title>{card.platoon_name}</Card.Title>
          <Image src=".logo192.png" alt={card.platoon_name} className="centered" fluid/>
        </Card.Body>
      </Card>
      </div>
    )
  }

  const platoons = posts.filter(platoon => 
    platoon.faction_id === location.state);
  
  return(
    <div className="grid">{platoons.map(renderCard)}</div>
  );
};

export default Platoons;