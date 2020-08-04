import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img
          alt={this.props.info.side}
          src={this.props.info.imgSrc}
          className={this.props.flipping ? "flip" : ""}
        />
      </div>
    );
  }
}

export default Coin;
