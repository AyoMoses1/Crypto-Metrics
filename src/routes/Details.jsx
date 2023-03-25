import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchCountryDetails } from '../redux/cryptos/cryptoSlice';

function Details() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const res = useSelector((state) => state.cryptoReducer.details);

  useEffect(() => {
    dispatch(fetchCountryDetails(state));
  }, [dispatch, state]);

  return (
    <Container fluid className="margin-top">
      <Nav.Link href="/"><span style={{ color: '#fff' }}><i className="fa-solid fa-arrow-left" /></span></Nav.Link>
      <div className="banner" style={{ background: `url(${res?.countryInfo?.flag}` }}>
        <h2>Covid Tracker</h2>
        <p>Over 200views</p>
      </div>
      <Row className="justify-content-center">
        <Col md={{ span: 4 }} sm={{ span: 12 }} className="mb-4">
          <div className="grid-list">
            <h4>Cases</h4>
            <p>{res?.cases}</p>
          </div>
          <div className="grid-list">
            <h4>Deaths</h4>
            <p>{res?.deaths}</p>
          </div>
          <div className="grid-list">
            <h4>Recovered</h4>
            <p>{res?.recovered}</p>
          </div>
          <div className="grid-list">
            <h4>Population</h4>
            <p>{res?.population}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
