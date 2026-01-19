import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'components/form-elements/Button';
import { PRODUCT_URL } from 'consts/applicationUrls';
import Translate from 'utils/Translate';

const ProductsListHeader = ({ isUserAdmin }) => (
  <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center list-page-header">
    <span className="d-flex align-self-center title mt-3 mb-1 mt-md-0 mb-md-0">
      <Translate id="react.productsList.header.label" defaultMessage="Product List" />
    </span>
    {isUserAdmin && (
      <div className="d-flex flex-column flex-md-row buttons align-items-stretch align-items-md-start justify-content-md-start flex-md-grow-0 w-100 w-md-auto mt-2 mt-md-0 gap-2 gap-md-3">
        <a href={PRODUCT_URL.importCSV()} className="w-100 w-md-auto d-flex align-items-center justify-content-center" style={{ height: '36px', whiteSpace: 'nowrap' }}>
          <Button
            defaultLabel="Import products"
            label="react.productsList.importProducts.label"
            variant="primary-outline"
            className="w-100 w-md-auto d-flex align-items-center justify-content-center"
            style={{ height: '36px', whiteSpace: 'nowrap' }}
          />
        </a>
        <a href={PRODUCT_URL.create()} className="w-100 w-md-auto d-flex align-items-center justify-content-center" style={{ height: '36px', whiteSpace: 'nowrap' }}>
          <Button
            defaultLabel="Add product"
            label="react.productsList.addProduct.label"
            variant="primary"
            className="w-100 w-md-auto d-flex align-items-center justify-content-center"
            style={{ height: '36px', whiteSpace: 'nowrap' }}
          />
        </a>
      </div>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  isUserAdmin: state.session.isUserAdmin,
});

export default connect(mapStateToProps)(ProductsListHeader);

ProductsListHeader.propTypes = {
  isUserAdmin: PropTypes.bool.isRequired,
};
