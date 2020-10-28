import React, { Component } from "react";
import Cell, { BorderType } from "../Cell/Cell";

import "./Sodoku.scss";
import "../Cell/Cell.scss";

interface GridState {
  highlightedIndexX: number;
  highlightedIndexY: number;
}

class Sodoku extends Component<{}, GridState> {
  constructor(props: any) {
    super(props);
    this.state = { highlightedIndexX: -1, highlightedIndexY: -1 };
  }

  render() {
    let cells: JSX.Element[] = [];

    for (let x = 0; x < 9; x++)
      for (let y = 0; y < 9; y++) {
        let cellBordertype: BorderType = BorderType.None;

        if (x === 0 || x === 3 || x === 6)
          cellBordertype += BorderType.Top;
        else if (x === 2 || x === 5 || x === 8)
          cellBordertype += BorderType.Bottom;

        if (y === 0 || y === 3 || y === 6)
          cellBordertype += BorderType.Left;
        else if (y === 2 || y === 5 || y === 8)
          cellBordertype += BorderType.Right;

        let cellHighlighted = false;
        if (this.state.highlightedIndexX === x && this.state.highlightedIndexY === y)
          cellHighlighted = true;

        cells.push(<Cell borderType={cellBordertype} positionX={x} positionY={y} key={`x:${x} y:${y}`} onClick={() => this.setState({ highlightedIndexX: x, highlightedIndexY: y })} isHighlighted={cellHighlighted} />);
      }

    return (
      <div className="sodoku">
        <div className="grid">
          {cells}
        </div>
      </div>
    );
  }
}

export default Sodoku;