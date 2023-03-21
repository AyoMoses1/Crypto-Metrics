/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';


const links = [
  { path: '/', text: 'Books' },
  { path: 'details', text: 'Details' },
];

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
         Bookstore CMS
        </div>
        <ul>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              <li>
                <NavLink to={link.path} >{link.text}</NavLink>
              </li>
            </React.Fragment>
          ))}
        </ul>
        <div>
          <i className="fa-solid fa-user"></i>
        </div>
      </nav>
    </>
  );
};
export default Navbar;