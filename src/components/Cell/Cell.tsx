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
  isHighlighted: boolean;
  onClick: () => void;
}

interface CellState {
  digit?: number;
}

class Cell extends Component<CellProps, CellState> {

  constructor(props: CellProps) {
    super(props);

    this.state = { digit: 0 };
  }

  keypress(event: React.KeyboardEvent) {
    if (event.key !== "1" && event.key !== "2" && event.key !== "3" && event.key !== "4" && event.key !== "5" && event.key !== "6" && event.key !== "7" && event.key !== "8" && event.key !== "9")
      return;

    this.setState({ digit: Number(event.key) })
  }

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

    return <div className={classNames} tabIndex={0} onClick={() => this.props.onClick()} onKeyDown={this.keypress.bind(this)} >{this.state.digit ? this.state.digit : ""}</div>;
  }
}
export default Cell;
