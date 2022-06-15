import React, { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className='navbar'>
      <div className='temp'></div>
      <div className='nav-heading'>
        <h3>Profile</h3>
      </div>

      <div className='translator' onClick={handleClick}>
        <i class='fa-solid fa-language ' style={{ cursor: 'pointer' }}></i>
      </div>
      <div className={`lang-select ${show && 'show-comp'}`}>
        <h3>Choose your language</h3>
        <div className='languages'>
          <div className='l-1'>
            <button className='btn'>A</button>
            <h4>English</h4>
          </div>
          <div className='l-4'>
            <button className='btn'>उ</button>
            <h4>Hindi</h4>
          </div>
          <div className='l-3'>
            <button className='btn'>ळ</button>
            <h4>Marathi</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
