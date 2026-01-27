import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from 'components/form-elements/Button';
import { ORDER_URL, STOCK_MOVEMENT_URL } from 'consts/applicationUrls';
import Translate from 'utils/Translate';

const PurchaseOrderListHeader = ({ history, supportedActivities }) => (
  <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center list-page-header">
    <span className="d-flex align-self-center title mt-3 mb-1 mt-md-0 mb-md-0">
      <Translate id="react.purchaseOrder.list.label" defaultMessage="Purchase Order List" />
    </span>
    <div className="d-flex flex-column flex-md-row buttons align-items-stretch align-items-md-start justify-content-md-start flex-md-grow-0 w-100 w-md-auto mt-2 mt-md-0">
      <Button
        defaultLabel="Create Shipment from PO"
        label="react.purchaseOrder.createShipmentFromPo.label"
        onClick={() => history.push({ pathname: STOCK_MOVEMENT_URL.createCombinedShipments(), search: 'direction=INBOUND' })}
        className="w-100 w-md-auto d-flex align-items-center justify-content-center"
        style={{ height: '36px', whiteSpace: 'nowrap' }}
      />
      {supportedActivities.includes('PLACE_ORDER') && (
        <a
          href={ORDER_URL.create()}
          className="primary-button w-100 w-md-auto d-flex align-items-center justify-content-center"
          style={{ height: '36px', whiteSpace: 'nowrap' }}
        >
          <Button
            defaultLabel="Create Order"
            label="react.purchaseOrder.createOrder.label"
            variant="primary"
            className="w-100 w-md-auto d-flex align-items-center justify-content-center"
            style={{ height: '36px', whiteSpace: 'nowrap' }}
          />
        </a>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  supportedActivities: state.session.supportedActivities,
});

export default withRouter(connect(mapStateToProps)(PurchaseOrderListHeader));

PurchaseOrderListHeader.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  supportedActivities: PropTypes.arrayOf(PropTypes.string).isRequired,
};
