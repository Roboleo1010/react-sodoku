import React, { Component } from "react";

export enum BorderType {
  None = 0,
  Top = 1 << 0,
  Bottom = 1 << 1,
  Left = 1 << 2,
  Right = 1 << 3,
}

interface CellProps {
  borderType: BorderType;
  positionX: number,
  positionY: number,
  isHighlighted?: boolean;
  onClick: () => void;
}

interface CellState {
  number?: number;
}

class Cell extends Component<CellProps, CellState> {

  render() {
    let classNames: string = "cell unselectable ";

    if (this.props.borderType & BorderType.Top)
      classNames += "border-top ";

    if (this.props.borderType & BorderType.Right)
      classNames += "border-right ";

    if (this.props.borderType & BorderType.Bottom)
      classNames += "border-bottom ";

    if (this.props.borderType & BorderType.Left)
      classNames += "border-left ";

    if (this.props.isHighlighted)
      classNames += "highlighted "

    return <div className={classNames} onClick={() => this.props.onClick()}></div>;
  }
}
export default Cell;
