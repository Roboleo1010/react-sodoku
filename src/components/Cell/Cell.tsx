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
  digit: number;
  cellSelectedClick: (digit: number) => void;
  cellUpdated: (newDigit: number) => void;
}

class Cell extends Component<CellProps> {

  constructor(props: CellProps) {
    super(props);
  }

  onKeypress(event: React.KeyboardEvent) {
    if (this.props.isInitial)
      return;

    if (event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9") {
      this.props.cellUpdated(Number(event.key));

    }
    else if (event.key === "Backspace" || event.key === "Delete" || event.key === "0") {
      this.props.cellUpdated(0);
    }
  }

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

    if (this.props.isInitial)
      classNames += "number-initial ";
    else
      classNames += "number-added ";

    return <div className={classNames} tabIndex={0} onClick={() => this.props.cellSelectedClick(this.props.digit)} onKeyDown={this.onKeypress.bind(this)} >{this.props.digit > 0 ? this.props.digit : ""}</div>;
  }
}
export default Cell;
