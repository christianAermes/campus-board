// Component to display details about the sets of the current exercise
// Start/ Stop button for rest timer
// clock to display time left for resting
// display to show number of completed sets
// reset button for exercise

import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { faPause } from "@fortawesome/free-solid-svg-icons"
import { faUndo } from "@fortawesome/free-solid-svg-icons"
import "./Sets.css"

export default class Sets extends Component {
    constructor(props) {
        super(props)
        console.log(props.running)
        this.R0 = 120;
        this.state = {
            running: props.running,
            rest: this.R0*1000,
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.running !== this.state.running) {
            this.setState({
                running: !this.state.running
            })
        }
    }

    render() {
        let date = new Date(this.props.rest)
        let mm = date.getUTCMinutes();
        let ss = date.getUTCSeconds();
        let ms = date.getUTCMilliseconds()/10;
        mm = mm < 10? "0"+mm : mm;
        ss = ss < 10? "0"+ss : ss;
        ms = ms < 10? "0"+ms : ms;
        return (
            <div className="gridDisplaySets">
                <div className="sets-done">{this.props.setsDone} / {this.props.setsTarget}</div>
                
                <button className="start-stop-btn btn btn-primary" onClick={this.props.handleStartStop} style={{textAlign: this.state.running? "right" : "center"}}>
                    <FontAwesomeIcon icon={this.state.running? faPlay : faPause} size="lg"/>
                </button>
                
                <div className="clock">{mm}:{ss}:{ms}</div>
                
                <button className="reset-btn btn btn-primary" onClick={this.props.handleReset}>
                    <FontAwesomeIcon icon={faUndo} size="lg"/>
                </button>
            </div>

        )
    }
}