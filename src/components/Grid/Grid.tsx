import React, { Component } from "react";
import GridRow from "../GridRow/GridRow";
import { GridRowLoacation } from "../GridRow/GridRow";

interface GridState {
  highlightedIndex: Vector2;
}

class Grid extends Component<{}, GridState> {

  constructor(props: any) {
    super(props);
    this.state = {
      highlightedIndex: { x: -1, y: -1 },
    };
  }

  render() {
    let rows: JSX.Element[] = [];

    for (let y = 0; y < 9; y += 3) {
      rows.push(<GridRow onHighlightedIndexChanged={(index) => { this.setState(() => ({ highlightedIndex: { x: index, y: y } })) }} rowIndex={y} highlightIndex={this.state.highlightedIndex.y === y ? this.state.highlightedIndex.x : null} gridRowLoacation={GridRowLoacation.Top} />);
      rows.push(<GridRow onHighlightedIndexChanged={(index) => { this.setState(() => ({ highlightedIndex: { x: index, y: y + 1 } })) }} rowIndex={y + 1} highlightIndex={this.state.highlightedIndex.y === y + 1 ? this.state.highlightedIndex.x : null} gridRowLoacation={GridRowLoacation.Middle} />);
      rows.push(<GridRow onHighlightedIndexChanged={(index) => { this.setState(() => ({ highlightedIndex: { x: index, y: y + 2 } })) }} rowIndex={y + 2} highlightIndex={this.state.highlightedIndex.y === y + 2 ? this.state.highlightedIndex.x : null} gridRowLoacation={GridRowLoacation.Bottom} />);
    }

    return (
      <div className="grid">
        {rows}
      </div>
    );
  }

  componentDidMount() {

  }
}

export default Grid;

interface Vector2 {
  x: number;
  y: number;
}