import React, { Component } from "react";
import { choice } from "./helper.js";
import Coin from "./Coin.js";
import heads from "./images/heads-cropped.png";
import tails from "./images/tails-cropped.png";
class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc: heads,
      },
      {
        side: "tails",
        imgSrc: tails,
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
      flipping: false,
    };
  }
  flipCoin = () => {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  };
  handleClick = () => {
    this.flipCoin();
    this.setState({ flipping: true });
    setTimeout(() => {
      this.setState({ flipping: false });
    }, 1000);
  };
  reset = () => {
    this.setState({
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    });
  };
  render() {
    return (
      <div className="CoinFlip">
        <h1>Coin Flip</h1>
        {this.state.currCoin && (
          <Coin info={this.state.currCoin} flipping={this.state.flipping} />
        )}
        <div className="buttons">
          <button onClick={this.handleClick}>Flip Me</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <p>Total Flips: {this.state.nFlips}</p>
        <p>Heads: {this.state.nHeads}</p>
        <p>Tails: {this.state.nTails}</p>
      </div>
    );
  }
}

export default CoinFlip;
