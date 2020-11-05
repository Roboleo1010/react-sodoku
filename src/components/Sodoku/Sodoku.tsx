import React, { Component } from "react";
import Cell, { BorderType } from "../Cell/Cell";
import Stopwatch from "../Stopwatch/Stopwatch"
import SodokuInput from "../SodokuInput/SodokuInput";
import SodokuManager, { SodokuDigit } from "../../SodokuManager";

import "./Sodoku.scss";
import "../Cell/Cell.scss";

interface GridState {
  activeCellX: number;
  activeCellY: number;
  highlightedDigit: number;
  sodoku: SodokuDigit[];
  cellSize: number;
}

class Sodoku extends Component<{}, GridState> {
  constructor(props: any) {
    super(props);

    this.state = { activeCellX: -1, activeCellY: -1, highlightedDigit: 0, sodoku: SodokuManager.getSodoku(), cellSize: 0 };

    document.addEventListener("keydown", (event) => this.keypress(event));
    window.addEventListener("resize", (event) => this.resize(event));
  }
  private totalBorderSize: number = 2 * 6 + 1 * 12; //border-thicc * 6 + border-standard * 12

  componentDidMount() {
    if (this.state.cellSize === 0)
      this.resize();
  }

  //#region  Helpers
  getSodokuCellFromSodoku(x: number, y: number): SodokuDigit {
    return this.state.sodoku[this.getIndexFrom1dArray(x, y)];
  }

  getIndexFrom1dArray(x: number, y: number): number {
    return x + y * 9;
  }
  //#endregion

  updateCell(newDigit: number) {
    let sodoku = this.state.sodoku;
    if (sodoku[this.getIndexFrom1dArray(this.state.activeCellX, this.state.activeCellY)].isGiven)
      return;

    sodoku[this.getIndexFrom1dArray(this.state.activeCellX, this.state.activeCellY)] = { digit: newDigit, isGiven: false }

    this.setState({ highlightedDigit: newDigit, sodoku: sodoku });
  }

  keypress(event: KeyboardEvent) {
    if (this.state.activeCellX === -1 || this.state.activeCellY === -1 || this.getSodokuCellFromSodoku(this.state.activeCellX, this.state.activeCellY).isGiven)
      return;

    if (event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9")
      this.updateCell(Number(event.key));
    else if (event.key === "Backspace" || event.key === "Delete" || event.key === "0")
      this.updateCell(0);
  }

  resize(event?: UIEvent) {

    let newSize = 0;

    newSize = (window.innerWidth - this.totalBorderSize) / 9;

    console.log("Calculated size:", newSize);

    if (newSize > 50)
      newSize = 50;

    this.setState({ cellSize: newSize });
  }

  buildCells(): JSX.Element[] {
    let cells: JSX.Element[] = [];

    for (let y = 0; y < 9; y++)
      for (let x = 0; x < 9; x++) {
        let cellBordertype: BorderType = BorderType.None;

        // Border generation
        if (y === 0 || y === 3 || y === 6)
          cellBordertype += BorderType.Top;
        else if (y === 2 || y === 5 || y === 8)
          cellBordertype += BorderType.Bottom;

        if (x === 0 || x === 3 || x === 6)
          cellBordertype += BorderType.Left;
        else if (x === 2 || x === 5 || x === 8)
          cellBordertype += BorderType.Right;

        let sodokuDigit = this.getSodokuCellFromSodoku(x, y);

        let cellHighlighted = false;
        if ((this.state.activeCellX === x && this.state.activeCellY === y) || (this.state.highlightedDigit === sodokuDigit.digit && sodokuDigit.digit !== 0))
          cellHighlighted = true;

        let cellSelectedClick = (digit: number) => this.setState({ activeCellX: x, activeCellY: y, highlightedDigit: digit });

        cells.push(<Cell borderType={cellBordertype} key={`x:${x} y:${y}`} digit={sodokuDigit.digit} isInitial={sodokuDigit.isGiven} cellSelectedClick={cellSelectedClick} cellUpdated={this.updateCell.bind(this)} isHighlighted={cellHighlighted} hasError={false} size={this.state.cellSize} />);
      }

    return cells;
  }

  buildInputRow(): JSX.Element[] {
    let inputs: JSX.Element[] = [];

    for (let i = 0; i < 10; i++)
      inputs.push(<SodokuInput key={i} digit={i} inputClicked={this.updateCell.bind(this)}></SodokuInput>)

    return inputs;
  }

  render() {
    const style = { width: `${(this.state.cellSize * 9) + this.totalBorderSize}px`, height: `${(this.state.cellSize * 9) + this.totalBorderSize}px` };

    return (
      <div className="container">
        <Stopwatch></Stopwatch>
        <div className="sodoku" style={style}>
          {this.buildCells()}
        </div>
        <div className="input-row">
          {this.buildInputRow()}
        </div>
      </div >
    );
  }
}

export default Sodoku;