// Component that displays the Campusboard and animates the hand sequence for the current exercise

import React, { Component } from "react"
import rung from "../images/Rung.png"
import background from "../images/Background.png"
import "./Board.css"

export default class Board extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            sequence: this.props.exercise? this.props.exercise.sequence : [[1,1]],
            counter: 0,
            start: 0,
        }
    }

    componentDidMount() {
        // when the component mount start animation of hand sequence for the exercise
        this.timerID = setInterval(()=>{
            this.setState({counter: this.state.counter+1})
        }, 750)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    componentWillUpdate(nextProps, nextState) {
        // fired when the reset button in the Sets Component is pressed
        // reset the animation of the hand sequence so that it starts at the lowest rung again
        if (nextProps.running !== this.props.running || nextProps.rest !== this.props.rest || nextProps.set !== this.props.set) {
            this.setState({
                counter: 0
            })
        }

        // fired when a new exercise is selected
        if (nextProps.exercise.name !== this.props.exercise.name) {
            this.setState({
                sequence: nextProps.exercise? nextProps.exercise.sequence : [[1,1]],
                counter: 0,
                start: 0,
            })
        }
    }

    render() {
        const imgW = 575; // original width of the rung image
        const imgH = 61; // original height of the rung image
        const w = window.innerWidth; // width browser window
        const ids = [1,2,3,4,5,6,7,8,9] // positions of the rungs on the board

        const idx = this.props.running? this.state.counter%this.state.sequence.length : 0;
        const left = this.state.sequence[idx][this.props.startWithLeft? 0 : 1]
        const right = this.state.sequence[idx][this.props.startWithLeft? 1 : 0]

        // calculate the height with which the rungs should be rendered so that they keep their aspect ration
        // try/catch because on start this.refs.background is udefined
        let rungH;
        try {
            rungH = 0.8 * this.refs.background.clientWidth * imgH/imgW
        } catch {
            rungH = 0.8*w * imgH/imgW
        }

        // styles for the left/ right element that animates the hand sequence
        let leftStyle = {
            position: "absolute",
            width: "12.5%",
            height: rungH+"px",
            bottom: 1./10*left*100 + "%",
            left: "22.5%",
            background: "red",
            opacity: "0.5"
        }
        let rightStyle = {
            position: "absolute",
            width: "12.5%",
            height: rungH+"px",
            bottom: 1./10*right*100 + "%",
            right: "22.5%",
            background: "red",
            opacity: "0.5"
        }

        // define the rung elements and their absolute position on the background image
        let rungElements = []
        for (let id of ids) {
            let rungElement = {
                style: {
                    width: "80%",
                    height: rungH+"px",
                    bottom: 1./10*id*100 + "%",
                },
                id: id,
            }
            rungElements.push(rungElement)
        }
        
        return (
            <div id="img-container">
                <img src={background} style={{maxWidth:"100%", borderRadius:"8px 8px 0 0"}} alt="background" ref="background"/>
                {rungElements.map((el)=>
                    <div className={"rung " + el.id} key={el.id} style={el.style}>
                        <img src={rung} alt="rung" style={{borderRadius: 0.08*rungH + "px",}}/>
                    </div>)}
                <div className="left-hand" style={leftStyle}></div>
                <div className="right-hand" style={rightStyle}></div>
            </div>
        )
    }
}