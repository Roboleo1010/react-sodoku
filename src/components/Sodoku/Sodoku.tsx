import React, { Component } from "react";
import Cell, { BorderType } from "../Cell/Cell";
import Stopwatch from "../Stopwatch/Stopwatch"

import "./Sodoku.scss";
import "../Cell/Cell.scss";
import { start } from "repl";

interface GridState {
  highlightedIndexX: number;
  highlightedIndexY: number;
  highlightedDigit: number;
  sodoku: number[];
}

class Sodoku extends Component<{}, GridState> {
  constructor(props: any) {
    super(props);
    this.state = {
      highlightedIndexX: -1, highlightedIndexY: -1, highlightedDigit: 0, sodoku: [
        5, 4, 8, 6, 0, 9, 2, 0, 0,
        0, 0, 0, 0, 0, 0, 5, 0, 8,
        0, 6, 0, 5, 1, 0, 0, 9, 0,
        2, 0, 4, 0, 0, 7, 3, 0, 0,
        9, 0, 0, 0, 0, 0, 1, 0, 0,
        7, 0, 6, 0, 5, 2, 0, 0, 9,
        0, 0, 0, 0, 2, 0, 8, 4, 7,
        0, 0, 3, 0, 4, 0, 0, 2, 0,
        0, 2, 1, 7, 8, 0, 0, 0, 0
      ]
    };
  }

  render() {
    let cells: JSX.Element[] = [];
    for (let y = 0; y < 9; y++)
      for (let x = 0; x < 9; x++) {
        let cellBordertype: BorderType = BorderType.None;

        if (y === 0 || y === 3 || y === 6)
          cellBordertype += BorderType.Top;
        else if (y === 2 || y === 5 || y === 8)
          cellBordertype += BorderType.Bottom;

        if (x === 0 || x === 3 || x === 6)
          cellBordertype += BorderType.Left;
        else if (x === 2 || x === 5 || x === 8)
          cellBordertype += BorderType.Right;

        let cellHighlighted = false;
        if (this.state.highlightedIndexX === x && this.state.highlightedIndexY === y)
          cellHighlighted = true;

        let startingDigit = this.state.sodoku[x + y * 9];
        let isInitial = startingDigit > 0 ? true : false;
        let cellSelectedClick = (digit: number) => this.setState({ highlightedIndexX: x, highlightedIndexY: y, highlightedDigit: digit });
        let cellUpdated = (newDigit: number) => this.setState({ highlightedDigit: newDigit });

        cells.push(<Cell borderType={cellBordertype} positionX={x} positionY={y} key={`x:${x} y:${y}`} startingDigit={startingDigit} isInitial={isInitial} cellSelectedClick={cellSelectedClick} cellUpdated={cellUpdated} highlightedDigit={this.state.highlightedDigit} isHighlighted={cellHighlighted} />);
      }

    return (
      <div className="sodoku">
        <Stopwatch></Stopwatch>
        <div className="grid">
          {cells}
        </div>
      </div>
    );
  }
}

export default Sodoku;