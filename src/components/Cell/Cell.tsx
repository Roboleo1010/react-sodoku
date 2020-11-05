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
  isHighlighted: boolean;
  isInitial: boolean;
  hasError: boolean;
  digit: number;
  size: number;
  cellSelectedClick: (digit: number) => void;
  cellUpdated: (newDigit: number) => void;
}

class Cell extends Component<CellProps> {
  render() {
    let classNames: string = "cell ";

    if (this.props.borderType & BorderType.Top)
      classNames += "border-top ";

    if (this.props.borderType & BorderType.Right)
      classNames += "border-right ";

    if (this.props.borderType & BorderType.Bottom)
      classNames += "border-bottom ";

    if (this.props.borderType & BorderType.Left)
      classNames += "border-left ";

    if (this.props.isHighlighted)
      classNames += "highlight ";

    if (this.props.hasError)
      classNames += "error ";

    if (this.props.isInitial)
      classNames += "number-initial ";
    else
      classNames += "number-added ";

    const style = { width: `${this.props.size}px`, height: `${this.props.size}px`, fontSize: `${this.props.size}px` };

    return <div className={classNames} style={style} tabIndex={0} onClick={() => this.props.cellSelectedClick(this.props.digit)}>{this.props.digit > 0 ? this.props.digit : ""}</div>;
  }
}
export default Cell;
