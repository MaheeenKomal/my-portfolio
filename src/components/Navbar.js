import {useState} from 'react';
import React from 'react';

export const Navbar = () => {
  const values = [
    {name: 'Home', url: 'header'},
    {name: 'About', url: 'about'},
    {name: 'Resume', url: 'resume'},
    {name: 'Portfolio', url: 'portfolio'},
  ];
  const [active, setActive] = useState (false);
  function handleClick () {
    setActive (active => !active);
  }

  let checkClass = active ? 'active' : '';

  return (
    <div id="navbar">
      <ul>
        {values.map (values => (
          <li className={`nav-item${checkClass}`} onClick={handleClick}>
            <a href={`#${values.url}`}>
              {values.name}
            </a>
          </li>
        ))}

      </ul>
    </div>
  );
};
