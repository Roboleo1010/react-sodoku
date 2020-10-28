import React, { Component } from "react";
import GridRow from "../GridRow/GridRow";
import { GridRowLoacation } from "../GridRow/GridRow";

class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <GridRow gridRowLoacation={GridRowLoacation.Top} />
        <GridRow gridRowLoacation={GridRowLoacation.Middle} />
        <GridRow gridRowLoacation={GridRowLoacation.Bottom} />

        <GridRow gridRowLoacation={GridRowLoacation.Top} />
        <GridRow gridRowLoacation={GridRowLoacation.Middle} />
        <GridRow gridRowLoacation={GridRowLoacation.Bottom} />

        <GridRow gridRowLoacation={GridRowLoacation.Top} />
        <GridRow gridRowLoacation={GridRowLoacation.Middle} />
        <GridRow gridRowLoacation={GridRowLoacation.Bottom} />
      </div>
    );
  }
}

export default Grid;
