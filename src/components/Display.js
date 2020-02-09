// Component that displays the animation of the hand sequence for the current exercise and displays information about the setss

import React, { Component } from "react"
import Board from "./Board.js"
import Sets from "./Sets.js"
import "./Display.css"

export default class Display extends Component {
    constructor(props) {
        super(props)
        
        this.R0 = 0; // seconds of rest betwen sets
        this.state = {
            R0: props.exercise.rest,
            running: true,
            rest: props.exercise.rest*1000,
            set: 1,
            startWithLeft: true,
            start: 0
        }

        this.handleStartStop = this.handleStartStop.bind(this)
        this.handleReset = this.handleReset.bind(this)

    }

    // Method for handling click of the start/stop button in the Sets Component
    handleStartStop() {
        if (this.state.set < this.props.exercise.sets) {
            // start/stop the animation of the hand sequence
            this.setState({running: !this.state.running})
            if (this.state.running) {
                // run the timer for the rest between sets
                this.timerID = setInterval(()=>{
                    if (this.state.rest > 0) {
                        this.setState({rest: this.state.rest-10})
                    } else {
                        // when rest time elapsed, reset the timer
                        this.setState({
                            rest: this.state.R0*1000, 
                            running: true,
                            set: this.state.set + 1,
                            startWithLeft: ! this.state.startWithLeft
                        })
                        clearInterval(this.timerID)
                    }
                }, 10)
            } else {
                //reset the timer
                clearInterval(this.timerID)
            }
        }

        
    }

    handleReset() {
        // change everything back to original state
        if (this.state.running) {
            this.setState({
                running: true,
                rest: this.state.R0*1000,
                set: 1,
                startWithLeft: true
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // when a new exercise is selected, reset the state
        if (nextProps.exercise.name !== this.props.exercise.name) {
            this.setState({
                set: 1,
                rest: nextProps.exercise.rest*1000,
                R0: nextProps.exercise.rest
            })
        }
    }

    render() {
        return (
            <div className="display">
                <Board rest={this.state.rest} exercise={this.props.exercise} set={this.state.set} startWithLeft={this.state.startWithLeft} running={this.state.running}/>
                <div className="displayExerciseName">
                    {this.props.exercise.name === "__Pause"? "No Exercise selected" : 
                        "Current Exercise: " + this.props.exercise.name}
                    <hr className="horizontalLine"/>
                </div>
                
                <Sets running={this.state.running} setsDone={this.state.set} setsTarget={this.props.exercise.sets} rest={this.state.rest} handleStartStop={this.handleStartStop} handleReset={this.handleReset} className="setsInfo"/>
            </div>
        )
    }
}