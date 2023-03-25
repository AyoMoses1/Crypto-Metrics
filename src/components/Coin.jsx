import React from 'react';
import Proptypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Coin({
  image, name, cases,
}) {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <img src={image} alt="" className="cardImage" />
      <button
        type="button"
        onClick={() => navigate('details', { state: name })}
        style={{
          float: 'right', color: '#fff', background: 'transparent', border: 'none',
        }}
      >
        <i className="fa-solid fa-circle-right" />
      </button>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>{cases}</p>
      </div>
    </div>
  );
}

export default Coin;

Coin.propTypes = {
  image: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  cases: Proptypes.number.isRequired,
};
