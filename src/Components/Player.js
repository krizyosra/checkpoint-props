import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Player({obj}) {
   
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{obj.name}</Card.Title>
      <Card.Text>
        {obj.age}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Player
