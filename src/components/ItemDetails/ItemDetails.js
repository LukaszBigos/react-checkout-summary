import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open ? "Hide" : "See"} item details
          {this.state.open ? "-" : "+"}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={70}
                height={70}
                src="https://cdn.pixabay.com/photo/2017/06/20/03/21/chair-2421605_960_720.png"
                alt="thumbnail"
              />
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
