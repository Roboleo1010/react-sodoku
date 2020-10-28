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
}

class GridRow extends Component<GridRowProps> {
  render() {
    switch (this.props.gridRowLoacation) {
      case GridRowLoacation.Top:
        return (
          <div className="grid-row">
            <Cell borderType={BorderType.Top | BorderType.Left} />
            <Cell borderType={BorderType.Top} />
            <Cell borderType={BorderType.Top | BorderType.Right} />
            <Cell borderType={BorderType.Top | BorderType.Left} />
            <Cell borderType={BorderType.Top} />
            <Cell borderType={BorderType.Top | BorderType.Right} />
            <Cell borderType={BorderType.Top | BorderType.Left} />
            <Cell borderType={BorderType.Top} />
            <Cell borderType={BorderType.Top | BorderType.Right} />
          </div>
        );
      case GridRowLoacation.Middle:
        return (
          <div className="grid-row">
            <Cell borderType={BorderType.Left} />
            <Cell borderType={BorderType.None} />
            <Cell borderType={BorderType.Right} />
            <Cell borderType={BorderType.Left} />
            <Cell borderType={BorderType.None} />
            <Cell borderType={BorderType.Right} />
            <Cell borderType={BorderType.Left} />
            <Cell borderType={BorderType.None} />
            <Cell borderType={BorderType.Right} />
          </div>
        );
      case GridRowLoacation.Bottom:
        return (
          <div className="grid-row">
            <Cell borderType={BorderType.Bottom | BorderType.Left} />
            <Cell borderType={BorderType.Bottom} />
            <Cell borderType={BorderType.Bottom | BorderType.Right} />
            <Cell borderType={BorderType.Bottom | BorderType.Left} />
            <Cell borderType={BorderType.Bottom} />
            <Cell borderType={BorderType.Bottom | BorderType.Right} />
            <Cell borderType={BorderType.Bottom | BorderType.Left} />
            <Cell borderType={BorderType.Bottom} />
            <Cell borderType={BorderType.Bottom | BorderType.Right} />
          </div>
        );
    }
  }
}
export default GridRow;
