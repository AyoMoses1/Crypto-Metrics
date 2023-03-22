import React from 'react';
import Proptypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Coin({
  image, name, continent, cases, population,
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{continent}</Card.Subtitle>
        <Card.Header>Statistics</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Cases:
            {cases}
          </ListGroup.Item>
          <ListGroup.Item>
            Population:
            {population}
          </ListGroup.Item>
        </ListGroup>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Coin;

Coin.propTypes = {
  image: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  continent: Proptypes.string.isRequired,
  cases: Proptypes.number.isRequired,
  population: Proptypes.number.isRequired,
};
