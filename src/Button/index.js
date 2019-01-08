import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class MButton extends Component {
  render() {
    return (
      <span style={{ margin: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.onClick}
        >
          {this.props.children}
        </Button>
      </span>
    );
  }
}

export default MButton;
