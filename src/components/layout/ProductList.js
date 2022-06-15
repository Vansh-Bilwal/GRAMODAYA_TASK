import React, { Fragment } from 'react';
import SingleProduct from './SingleProduct';

const ProductList = (products) => {
  return (
    <div className='product-list'>
      {products.data.length !== 0 ? (
        <Fragment>
          {products.data.map((p, index) => {
            return (
              <SingleProduct
                key={index}
                data={p}
                modal={products.modal}
              ></SingleProduct>
            );
          })}
        </Fragment>
      ) : (
        <h2>No Products Available</h2>
      )}
    </div>
  );
};

export default ProductList;
