import React, { Component } from "react";

import "./SodokuInput.scss";

interface SodokuInputProps {
    digit: number;
    inputClicked: (digit: number) => void;
}

class SodokuInput extends Component<SodokuInputProps> {
    render() {
        return <button className="input" onClick={() => this.props.inputClicked(this.props.digit)}>{this.props.digit > 0 ? this.props.digit : 'Del'}</button>;
    }
}

export default SodokuInput;