import React, { Component } from "react";
import Cell, { BorderType } from "../Cell/Cell";
import Stopwatch from "../Stopwatch/Stopwatch"

import "./Sodoku.scss";
import "../Cell/Cell.scss";

interface GridState {
  activeCellX: number;
  activeCellY: number;
  highlightedDigit: number;
  sodoku: SodokuDigit[];
}

interface SodokuDigit {
  digit: number;
  isGiven: boolean;
}

class Sodoku extends Component<{}, GridState> {
  constructor(props: any) {
    super(props);

    this.state = {
      activeCellX: -1, activeCellY: -1, highlightedDigit: 0, sodoku: this.buildSodoku()
    };
  }

  buildSodoku(): SodokuDigit[] {
    let numbers: number[] = [
      5, 4, 8, 6, 0, 9, 2, 0, 0,
      0, 0, 0, 0, 0, 0, 5, 0, 8,
      0, 6, 0, 5, 1, 0, 0, 9, 0,
      2, 0, 4, 0, 0, 7, 3, 0, 0,
      9, 0, 0, 0, 0, 0, 1, 0, 0,
      7, 0, 6, 0, 5, 2, 0, 0, 9,
      0, 0, 0, 0, 2, 0, 8, 4, 7,
      0, 0, 3, 0, 4, 0, 0, 2, 0,
      0, 2, 1, 7, 8, 0, 0, 0, 0
    ];

    let sodoku: SodokuDigit[] = [];

    numbers.forEach(element => {
      sodoku.push({ digit: element, isGiven: element === 0 ? false : true });
    });

    return sodoku;
  }

  getSodokuCellFromSodoku(x: number, y: number): SodokuDigit {
    return this.state.sodoku[this.getIndexFrom1dArray(x, y)];
  }

  getIndexFrom1dArray(x: number, y: number): number {
    return x + y * 9;
  }

  updateCell(newDigit: number) {
    let sodoku = this.state.sodoku;
    let index = this.getIndexFrom1dArray(this.state.activeCellX, this.state.activeCellY);

    sodoku[index] = { digit: newDigit, isGiven: false }//IsGiven cant be true, because this case is handld in the cell update method

    this.setState({ highlightedDigit: newDigit, sodoku: sodoku });
  }

  render() {
    let cells: JSX.Element[] = [];
    for (let y = 0; y < 9; y++)
      for (let x = 0; x < 9; x++) {
        let cellBordertype: BorderType = BorderType.None;

        //#region Border
        if (y === 0 || y === 3 || y === 6)
          cellBordertype += BorderType.Top;
        else if (y === 2 || y === 5 || y === 8)
          cellBordertype += BorderType.Bottom;

        if (x === 0 || x === 3 || x === 6)
          cellBordertype += BorderType.Left;
        else if (x === 2 || x === 5 || x === 8)
          cellBordertype += BorderType.Right;
        //#endregion

        let sodokuDigit = this.getSodokuCellFromSodoku(x, y);

        let cellHighlighted = false;
        if ((this.state.activeCellX === x && this.state.activeCellY === y) || (this.state.highlightedDigit === sodokuDigit.digit && sodokuDigit.digit !== 0))
          cellHighlighted = true;

        let cellSelectedClick = (digit: number) => this.setState({ activeCellX: x, activeCellY: y, highlightedDigit: digit });

        cells.push(<Cell borderType={cellBordertype} key={`x:${x} y:${y}`} digit={sodokuDigit.digit} isInitial={sodokuDigit.isGiven} cellSelectedClick={cellSelectedClick} cellUpdated={this.updateCell.bind(this)} isHighlighted={cellHighlighted} />);
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