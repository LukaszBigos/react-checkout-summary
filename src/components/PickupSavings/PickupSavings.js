import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

const style = {
  pickupSavings: {
    textDecoration: 'underline',

  },
  totalSavings: {
    color: 'red',
    fontWeight: 800

  }
}

export default class PickupSavings extends Component {
  render() {

    const tooltip = ( <Tooltip id="tooltip"> 
      <p>
      Picking up your order saves your money as we save our delivery cost.
      </p>
    </Tooltip> );

    return (
      <Row className="show-grid">
      <Col md={6}>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <div style={style.pickupSavings}>Pickup Savings</div>
        </OverlayTrigger>
      </Col>
      <Col style={style.totalSavings} md={6}>
      {`$${this.props.saving}`}
      </Col>
      </Row>
    )
  }
}
