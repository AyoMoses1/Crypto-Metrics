import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchCountryDetails } from '../redux/cryptos/cryptoSlice';

function Details() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const res = useSelector((state) => state.cryptoReducer.details);
  console.log(res, 'res');

  useEffect(() => {
    dispatch(fetchCountryDetails(state));
  }, []);

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={res?.countryInfo?.flag} />
        <Card.Body>
          <Card.Header>Statistics</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Cases:
              {res?.cases}
            </ListGroup.Item>
            <ListGroup.Item>
              Population:
              {res?.population}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Details;
