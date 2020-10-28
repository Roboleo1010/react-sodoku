import React, { Component, PureComponent } from "react";
import GridRow from "../GridRow/GridRow";
import { GridRowLoacation } from "../GridRow/GridRow";

class Grid extends PureComponent {
  render() {
    return (
      <div className="grid">
        <GridRow rowIndex={0} gridRowLoacation={GridRowLoacation.Top} />
        <GridRow rowIndex={1} gridRowLoacation={GridRowLoacation.Middle} />
        <GridRow rowIndex={2} gridRowLoacation={GridRowLoacation.Bottom} />

        <GridRow rowIndex={3} gridRowLoacation={GridRowLoacation.Top} />
        <GridRow rowIndex={4} gridRowLoacation={GridRowLoacation.Middle} />
        <GridRow rowIndex={5} gridRowLoacation={GridRowLoacation.Bottom} />

        <GridRow rowIndex={6} gridRowLoacation={GridRowLoacation.Top} />
        <GridRow rowIndex={7} gridRowLoacation={GridRowLoacation.Middle} />
        <GridRow rowIndex={8} gridRowLoacation={GridRowLoacation.Bottom} />
      </div>
    );
  }
}

export default Grid;