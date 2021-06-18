import React from 'react';
import specimen from "./imgs/thumbnail_Scale_4X.jpg";

export default class MicroscopeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { top: 100, right: 25 }
    }

    handleChange = event => {
        console.log(event);
        if (event.target.id === "top") {
            console.log("move up")
            let newTop = this.state.top - 5;
            this.setState({
                top: newTop
            })
            // var d = document.getElementById('yourDivId');
            // d.style.position = "absolute";
            // d.style.left = x_pos+'px';
            // d.style.top = y_pos+'px';
        }
        else if (event.target.id === "left") {
            console.log("move left")
        }
        else if (event.target.id === "right") {
            console.log("move right")
        }
        else if (event.target.id === "down") {
            console.log("move down")
        }
        // this.handleKeyPress();

    };

    handleKeyPress = event => {
        console.log(event);
        // if (event.target === "keydown") {
        //     console.log(event.target)
        // }

    };


    render() {
        return (
            <div>
                <div style={{ width: "800px", height: "600px", border: "solid black 1px" }} onKeyPress={this.handleKeyPress}><img src={specimen} style={{ width: "60%", position: "relative", top:this.state.top, right:this.state.right }} alt="Comb under microscope at 4x" />

                </div>
                <button id="top" onClick={this.handleChange} type="button">Top</button>
                <button onClick={this.handleChange} type="button">Left</button>
                <button onClick={this.handleChange} type="button">Right</button>
                <button onClick={this.handleChange} type="button">Down</button>
            </div>
        );
    }
}

