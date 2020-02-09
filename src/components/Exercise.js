// Component to display details about an exercise in a list
// information includes name of the exercise, its difficulty, the number of sets to complete and a short description
import React, { Component } from "react"
import "./Exercise.css"

export default class Exercise extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // select a new exercise to be displayed and animated
    handleClick(e) {
        e.preventDefault()
        this.props.setCurrent(this.props.exercise)
    }

    render() {
        // difficulty is displayed by starts - one star is easy, exercises with more stars are more difficult
        let difficulty = "";
        for (let i=0; i<this.props.exercise.difficulty; i++) {
            difficulty += "*"
        }
        return (
            <div className="exercise" onClick={this.handleClick}>
                <p className="name">{this.props.exercise.name}</p>
                <p className="difficulty">{difficulty}</p>
                <p className="sets">Sets: {this.props.exercise.sets}</p>
                <p className="description">{this.props.exercise.description}</p>
            </div>
        )
    }
}