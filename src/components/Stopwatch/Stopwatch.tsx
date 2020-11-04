import React, { Component } from "react";

import "./Stopwatch.scss";

interface StpwatchState {
    secondsElapsed: number;
    isStarted: boolean;
    intervalHandle: number;
}

class Stopwatch extends Component<{}, StpwatchState> {
    constructor(props: any) {
        super(props);
        this.state = { secondsElapsed: 0, isStarted: false, intervalHandle: -1 };
    }

    componentDidMount() {
        this.startTimer();
    }

    render() {
        return (<div>Elapsed Time: {this.formatTime()}</div>);
    }

    formatTime(): string {
        let minutes = (this.state.secondsElapsed - (this.state.secondsElapsed % 60)) / 60;
        let seconds = this.state.secondsElapsed - (minutes * 60);

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds} `;
    }

    startTimer() {
        if (this.state.isStarted) return;

        let handle = window.setInterval(() => { this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }) }, 1000)
        this.setState({ secondsElapsed: 0, isStarted: true, intervalHandle: handle });
    }

    stopTimer() {
        if (!this.state.isStarted) return;

        window.clearInterval(this.state.intervalHandle);
        this.setState({ isStarted: false, intervalHandle: -1 });
    }

}

export default Stopwatch;