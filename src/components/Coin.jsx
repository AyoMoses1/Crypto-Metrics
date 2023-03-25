/* eslint-disable*/
import React from 'react';
import Proptypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Coin({
  image, name, continent, cases, population,
}) {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <img src={image} alt="" className='cardImage'/>
      <span onClick={() => navigate('details', { state: name })} style={{float:'right', color:"#fff"}}><i className="fa-solid fa-circle-right"></i></span>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p>{cases}</p>
      </div>
    </div>
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
