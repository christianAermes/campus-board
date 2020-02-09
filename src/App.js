import React, { Component } from 'react';
import './App.css';

import Display from "./components/Display.js";
import Exercise from "./components/Exercise.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import exercises from "./data/exercises.js";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExercises: true,
      currentExercise: {name: "__Pause", sets: 1, difficulty:0, rest: 0, sequence:[[1,1]]},
      exercises: exercises.sort((ex1, ex2)=>ex1.difficulty-ex2.difficulty),
    }
    this.setCurrent = this.setCurrent.bind(this)
  }

  toggleDisplay() {
    this.setState({showExercises: ! this.state.showExercises})
  }

  setCurrent(ex) {
    this.setState({currentExercise:ex})
    // this.toggleDisplay()
  }

  render() {
    return(
      <div className="container">
        <h1>Campus Training</h1>
        
        <button className="toggleExercises" onClick={this.toggleDisplay.bind(this)}>
          <FontAwesomeIcon icon={faCaretDown} />
          <span style={{color: "white", marginLeft: "20px", fontSize:"1.2em"}}>{this.state.showExercises? "Hide Exercises": "Show Exercises"}</span>
        </button>
          
        
        
        <div className="gridDisplayAppComponents">
          {this.state.showExercises ? 
            <div className="exerciseContainer">
              <div className="borderTop"></div>
              <div className="exercise-wrapper">
                {this.state.exercises.map(ex=><Exercise exercise={ex} key={this.state.exercises.indexOf(ex)} setCurrent={this.setCurrent}/>)}
              </div>
            </div> 
            : ""}
          
          <Display exercise={this.state.currentExercise}/>
        </div>
        
      </div>
    )
  }
}
