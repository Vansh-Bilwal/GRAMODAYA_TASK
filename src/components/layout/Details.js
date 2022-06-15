import React, { Fragment, useState } from 'react';
import BusinessDetails from './BusinessDetails';
import ReviewDetails from './ReviewDetails';
const Details = ({ data, modal }) => {
  const [select, setSelect] = useState(false);

  const handleClick = (sel) => {
    setSelect(sel);
  };
  return (
    <div className='details-list'>
      <div className='select-detail'>
        <button
          className={`btn business-btn ${!select && 'btn-active'}`}
          onClick={() => handleClick(false)}
        >
          BUSINESS
        </button>
        <button
          className={`btn review-btn ${select && 'btn-active'}`}
          onClick={() => handleClick(true)}
        >
          REVIEW
        </button>
      </div>
      <div className='all-details-container'>
        {!select ? (
          <BusinessDetails data={data} modal={modal}></BusinessDetails>
        ) : (
          <ReviewDetails></ReviewDetails>
        )}
      </div>
      <div className='footer'>
        <p>Join the agricultural community</p>
        <div className='btn download-btn'>DOWNLOAD GRAMODAYA</div>
      </div>
    </div>
  );
};

export default Details;
