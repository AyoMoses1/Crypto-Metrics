import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchCountryDetails } from '../redux/cryptos/cryptoSlice';

function Details() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const res = useSelector((state) => state.cryptoReducer.details);

  useEffect(() => {
    dispatch(fetchCountryDetails(state));
  }, []);

  return (
    <Container className="margin-top">
      <Row className="justify-content-center">
        <Col md={{ span: 4 }} sm={{ span: 12 }} className="mb-4">
          <Card>
            <Card.Img src={res?.countryInfo?.flag} />
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
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
