import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { filterCountry } from '../redux/cryptos/cryptoSlice';

const links = [
  { path: '/', text: 'Books' },
];

const NavBar = () => {
  const [state, setState] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {links.map((link) => (
              <Nav.Link href={link.path} key={link.path}>{link.text}</Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex">
            <div className="icons-con">
              <i className="fa fa-microphone" aria-hidden="true" />
              <i className="fa fa-cog" aria-hidden="true" />
            </div>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success" onClick={() => dispatch(filterCountry(state))}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
