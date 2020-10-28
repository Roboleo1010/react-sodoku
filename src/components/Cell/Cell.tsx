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
}

interface CellState {
  number?: number;
  isHighlighted: boolean;
}

class Cell extends Component<CellProps, CellState> {
  constructor(props: CellProps) {
    super(props);
    this.state = {
      number: 9,
      isHighlighted: false,
    };
  }

  handleClick() {
    this.setState({ isHighlighted: true });
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

    if (this.state.isHighlighted)
      classNames += "highlighted "

    return <div className={classNames} onClick={this.handleClick.bind(this)}>{this.state.number}</div>;
  }
}
export default Cell;
