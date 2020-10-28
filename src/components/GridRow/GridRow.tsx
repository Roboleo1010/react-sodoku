import React, { Component } from "react";
import Cell from "../Cell/Cell";
import { BorderType } from "../Cell/Cell";

export enum GridRowLoacation {
  Top,
  Middle,
  Bottom,
}

interface GridRowProps {
  gridRowLoacation: GridRowLoacation;
  rowIndex: number;
  highlightIndex: number | null;
  onHighlightedIndexChanged: (index: number) => void;
}

class GridRow extends Component<GridRowProps> {
  private readonly borderTypeTop: BorderType[] = [BorderType.Top | BorderType.Left, BorderType.Top, BorderType.Top | BorderType.Right];
  private readonly borderTypeMiddle: BorderType[] = [BorderType.Left, BorderType.None, BorderType.Right];
  private readonly borderTypeBottom: BorderType[] = [BorderType.Bottom | BorderType.Left, BorderType.Bottom, BorderType.Bottom | BorderType.Right];

  render() {
    let cells: JSX.Element[] = [];
    let activeBorderTypeArray: BorderType[] = [];

    if (this.props.gridRowLoacation === GridRowLoacation.Top)
      activeBorderTypeArray = this.borderTypeTop;
    else if (this.props.gridRowLoacation === GridRowLoacation.Middle)
      activeBorderTypeArray = this.borderTypeMiddle;
    else if (this.props.gridRowLoacation === GridRowLoacation.Bottom)
      activeBorderTypeArray = this.borderTypeBottom;

    for (let x = 0; x < 9; x++)
      cells.push(<Cell isHighlighted={this.props.highlightIndex === x} positionX={x} positionY={this.props.rowIndex} borderType={activeBorderTypeArray[x % 3]} onClick={() => { this.props.onHighlightedIndexChanged(x); }} />);

    return (
      <div className="grid-row">
        {cells}
      </div>);
  }
}
export default GridRow;