import React, { Component } from "react";
import Cell, { BorderType } from "../Cell/Cell";

import "./Sodoku.scss";
import "../Cell/Cell.scss";

class Sodoku extends Component {
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

        cells.push(<Cell borderType={cellBordertype} positionX={x} positionY={y} key={`x:${x} y:${y}`} />);
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