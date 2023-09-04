import React, { useState, useEffect } from 'react';
import {Card} from 'react-bootstrap';
import '../static/css/grid.css';

function Units() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/unit/')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
    .catch((err) => {
      console.log(err.message);
    })
  }, []);

  const renderCard = (card, index) => {
    return (
      <div onClick={() => alert("Hello from here")}>
      <Card className="box" key={index}>
        <Card.Body>
          <Card.Title>{card.designation}</Card.Title>
          <Card.Text>
            Rank: {card.rank}
          </Card.Text>
          <Card.Text>
            Type: {card.type}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }
  
  return(
    <div className="grid">{posts.map(renderCard)}</div>
  );
};

export default Units;