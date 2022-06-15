import React, { Fragment } from 'react';
import Moment from 'react-moment';
const SingleProduct = ({ data, modal }) => {
  const {
    cmdtyID,
    cmdtySegment,
    cmdtyStdName,
    posts,
    rawReportPriceUnit,
    updatedAt,
    picUrl,
  } = data;
  const { marketStdName, loclevel2ShortName, loclevel3Name } = posts[0];
  const { maxPrice, minPrice } = posts[0].computed.highestAvgPriceVarietyGrade;

  return (
    <Fragment>
      <div className='single-product' key={cmdtyID}>
        <div className='product-details'>
          <div className='details-1'>
            <div className='product-img'>
              <img
                src={`https://gramoday-images-public.s3.ap-south-1.amazonaws.com/commodity/${picUrl}`}
                alt=''
                height='90'
                width='90'
              />
            </div>
            <div className='product-info'>
              <h4>{cmdtyStdName} Mandi Rates</h4>
              <p className='text-small'>
                {marketStdName}, {loclevel3Name}, {loclevel2ShortName}
              </p>
              <p className='text-small'>
                <Moment format='DD/MM/YYYY'>{updatedAt}</Moment>
              </p>
              <h4>
                ₹ {minPrice} - {maxPrice} / 1 {rawReportPriceUnit}
              </h4>
            </div>
            <div className='dots'>
              <i className='fa-solid fa-ellipsis-vertical'></i>
            </div>
            <div className='updated'>
              Updated at <Moment format='h:mm a'>{updatedAt}</Moment>
            </div>
          </div>
          <div className='details-2'>
            <div className='btn share-btn'>
              <i className='fa-brands fa-whatsapp'></i> &nbsp;Share
            </div>
            <div className='btn interest-btn' onClick={() => modal()}>
              <i className='fa-solid fa-square-arrow-up-right'></i>
              &nbsp;Interested
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
