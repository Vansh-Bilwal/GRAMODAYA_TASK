import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Details from './Details.js';
import Spinner from './Spinner';

const Landing = () => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const showModFunc = () => {
    setShowModal(true);
  };
  const handleClick = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const url =
      'https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      {data !== null ? (
        <Fragment>
          <div className={`modal ${showModal && 'show-comp-flex'}`}>
            <div className='box'>
              <div className='top'>
                <p>You need to download the Gramoday App for this action</p>
                <button className='btn close-btn' onClick={handleClick}>
                  X
                </button>
              </div>
              <div className='mid'>
                <p>Do you want to go to the play store?</p>
              </div>
              <div className='bottom'>
                <div className='btn'>Yes</div>
                <div className='btn'>No</div>
              </div>
            </div>
          </div>
          <div className='header'>
            <Navbar></Navbar>
          </div>

          <div className='container'>
            <Profile data={data} modal={showModFunc}></Profile>
          </div>
          <div className='details-container '>
            <Details data={data} modal={showModFunc}></Details>
          </div>
        </Fragment>
      ) : (
        <Spinner></Spinner>
      )}
    </Fragment>
  );
};

export default Landing;
