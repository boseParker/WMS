import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Button from 'components/form-elements/Button';
import { STOCK_TRANSFER_URL } from 'consts/applicationUrls';
import Translate from 'utils/Translate';

const StockTransferListHeader = ({ isUserManager }) => (
  <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center list-page-header">
    <span className="d-flex align-self-center title mt-3 mb-1 mt-md-0 mb-md-0 ms-2 ms-md-0">
      <Translate id="react.stockTransfer.list.label" defaultMessage="List Stock Transfers" />
    </span>
    {isUserManager && (
      <div className="d-flex flex-column flex-md-row buttons align-items-stretch align-items-md-start justify-content-md-start flex-md-grow-0 w-100 w-md-auto mt-2 mt-md-0">
        <Link to={STOCK_TRANSFER_URL.create()} className="primary-button w-100 w-md-auto d-flex align-items-center justify-content-center" style={{ height: '36px', whiteSpace: 'nowrap' }}>
          <Button
            defaultLabel="Create Stock Transfer"
            label="react.stockTransfer.createStockTransfer.label"
            variant="primary"
            className="w-100 w-md-auto d-flex align-items-center justify-content-center"
            style={{ height: '36px', whiteSpace: 'nowrap' }}
          />
        </Link>
      </div>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  isUserManager: state.session.isUserManager,
});

export default withRouter(connect(mapStateToProps)(StockTransferListHeader));

StockTransferListHeader.propTypes = {
  isUserManager: PropTypes.bool.isRequired,
};
