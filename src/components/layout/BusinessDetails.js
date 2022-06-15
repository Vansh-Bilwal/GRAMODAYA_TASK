import React from 'react';
import ProductList from './ProductList';

const BusinessDetails = ({ data: { business, products }, modal }) => {
  const { userOption, marketStdName, firmName, mandiShopnum } = business;

  return (
    <div className='busniess-details-container'>
      <h3 style={{ color: '#08a49c', marginTop: '10px' }}>{userOption}</h3>
      <div className='business-info'>
        <div className='key-value'>
          <div className='keys'>
            <p className='key-item'>Market Name</p>
            <p className='key-item'>Firm Name</p>
            <p className='key-item'>Shop Number</p>
          </div>
          <div className='values'>
            <h4 className='value-item'>{marketStdName}</h4>
            <h4 className='value-item'>{firmName}</h4>
            <h4 className='value-item'>{mandiShopnum}</h4>
          </div>
        </div>
      </div>
      <div className='products'>
        <h5>Products</h5>
        <ProductList data={products} modal={modal}></ProductList>
      </div>
    </div>
  );
};

export default BusinessDetails;
