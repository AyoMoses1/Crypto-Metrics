import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Coin from '../components/Coin';

function Home() {
  const state = useSelector((state) => state.cryptoReducer.list);
  console.log(state);
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {state.map((coin) => (
          <Col md={{ span: 3 }} sm={{ span: 6 }} key={coin.countryInfo.iso2} className="mb-4">
            <Coin
              image={coin.countryInfo.flag}
              name={coin.country}
              continent={coin.continent}
              cases={coin.cases}
              population={coin.population}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
