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
}

class GridRow extends Component<GridRowProps> {
  render() {
    switch (this.props.gridRowLoacation) {
      case GridRowLoacation.Top:
        return (
          <div className="grid-row">
            <Cell positionX={0} positionY={this.props.rowIndex} borderType={BorderType.Top | BorderType.Left} />
            <Cell positionX={1} positionY={this.props.rowIndex} borderType={BorderType.Top} />
            <Cell positionX={2} positionY={this.props.rowIndex} borderType={BorderType.Top | BorderType.Right} />
            <Cell positionX={3} positionY={this.props.rowIndex} borderType={BorderType.Top | BorderType.Left} />
            <Cell positionX={4} positionY={this.props.rowIndex} borderType={BorderType.Top} />
            <Cell positionX={5} positionY={this.props.rowIndex} borderType={BorderType.Top | BorderType.Right} />
            <Cell positionX={6} positionY={this.props.rowIndex} borderType={BorderType.Top | BorderType.Left} />
            <Cell positionX={7} positionY={this.props.rowIndex} borderType={BorderType.Top} />
            <Cell positionX={8} positionY={this.props.rowIndex} borderType={BorderType.Top | BorderType.Right} />
          </div>
        );
      case GridRowLoacation.Middle:
        return (
          <div className="grid-row">
            <Cell positionX={0} positionY={this.props.rowIndex} borderType={BorderType.Left} />
            <Cell positionX={1} positionY={this.props.rowIndex} borderType={BorderType.None} />
            <Cell positionX={2} positionY={this.props.rowIndex} borderType={BorderType.Right} />
            <Cell positionX={3} positionY={this.props.rowIndex} borderType={BorderType.Left} />
            <Cell positionX={4} positionY={this.props.rowIndex} borderType={BorderType.None} />
            <Cell positionX={5} positionY={this.props.rowIndex} borderType={BorderType.Right} />
            <Cell positionX={6} positionY={this.props.rowIndex} borderType={BorderType.Left} />
            <Cell positionX={7} positionY={this.props.rowIndex} borderType={BorderType.None} />
            <Cell positionX={8} positionY={this.props.rowIndex} borderType={BorderType.Right} />
          </div>
        );
      case GridRowLoacation.Bottom:
        return (
          <div className="grid-row">
            <Cell positionX={0} positionY={this.props.rowIndex} borderType={BorderType.Bottom | BorderType.Left} />
            <Cell positionX={1} positionY={this.props.rowIndex} borderType={BorderType.Bottom} />
            <Cell positionX={2} positionY={this.props.rowIndex} borderType={BorderType.Bottom | BorderType.Right} />
            <Cell positionX={3} positionY={this.props.rowIndex} borderType={BorderType.Bottom | BorderType.Left} />
            <Cell positionX={4} positionY={this.props.rowIndex} borderType={BorderType.Bottom} />
            <Cell positionX={5} positionY={this.props.rowIndex} borderType={BorderType.Bottom | BorderType.Right} />
            <Cell positionX={6} positionY={this.props.rowIndex} borderType={BorderType.Bottom | BorderType.Left} />
            <Cell positionX={7} positionY={this.props.rowIndex} borderType={BorderType.Bottom} />
            <Cell positionX={8} positionY={this.props.rowIndex} borderType={BorderType.Bottom | BorderType.Right} />
          </div>
        );
    }
  }
}
export default GridRow;
