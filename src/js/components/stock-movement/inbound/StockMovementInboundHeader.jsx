import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'components/form-elements/Button';
import { STOCK_MOVEMENT_URL } from 'consts/applicationUrls';
import Translate from 'utils/Translate';

const StockMovementInboundHeader = ({ showMyStockMovements }) => (
  <div className="d-flex flex-column  flex-md-row justify-content-md-between align-items-md-center list-page-header">
    <span className="d-flex align-self-center title mt-3 mb-1 mt-md-0 mb-md-0">
      <Translate id="react.stockMovement.inbound.list.label" defaultMessage="Inbound Movement List" />
    </span>
    <div className="d-flex flex-column flex-md-row buttons align-items-stretch align-items-md-start  justify-content-md-start flex-md-grow-0 ">
      <Button
        defaultLabel="My Stock Movements"
        variant="primary-outline"
        label="react.stockMovement.myStockMovement.label"
        onClick={showMyStockMovements}
        className="w-100 w-md-auto d-flex align-items-center justify-content-center "
        style={{ height: '36px', whiteSpace: 'nowrap' }}
        
      />
      <Link
        className="primary-button w-100 w-md-auto d-flex align-items-center justify-content-center"
        style={{ height: '36px', whiteSpace: 'nowrap' }}
        to={{ pathname: STOCK_MOVEMENT_URL.createCombinedShipments(), search: 'direction=INBOUND' }}
       

      >
        <Translate
          id="react.stockMovement.createShipmentFromPO.label"
          defaultMessage="Create Shipment from PO"
        />
      </Link>
      <Link
        className="primary-button w-100 w-md-auto d-flex align-items-center justify-content-center"
         style={{ height: '36px', whiteSpace: 'nowrap' }}
        to={STOCK_MOVEMENT_URL.createInbound()}
       

      >
        <Translate
          id="react.stockMovement.createStockMovement.label"
          defaultMessage="Create Stock Movement"
        />
      </Link>
    </div>
  </div>
);

StockMovementInboundHeader.propTypes = {
  showMyStockMovements: PropTypes.func.isRequired,
};

export default StockMovementInboundHeader;
