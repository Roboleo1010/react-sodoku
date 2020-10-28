import React, { Component } from "react";
import Grid from "../Grid/Grid";

import "./Sodoku.scss";
import "../Grid/Grid.scss";
import "../GridRow/GridRow.scss";
import "../Cell/Cell.scss";

class Sodoku extends Component {
  render() {
    return (
      <div className="sodoku">
        <Grid />
      </div>
    );
  }
}

export default Sodoku;
