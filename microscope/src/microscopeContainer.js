import React from 'react';
import specimen from "./imgs/thumbnail_Scale_4X.jpg";

export default class MicroscopeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { top: 100, right: 25, brightness: "100%" }
    }

    handleChange = event => {
        if (event.target.id === "top") {
            console.log("move up")
            let newTop = this.state.top - 5;
            if (newTop >= 0) {
                this.setState({
                    top: newTop
                })
            }

        }
        else if (event.target.id === "left") {
            console.log("move left")
            let newRight = this.state.right + 5;
            if (Math.abs(newRight) <= 175) {
                this.setState({
                    right: newRight
                })
            }
        }
        else if (event.target.id === "right") {
            console.log("move right")
            let newRight = this.state.right - 5;
            if (Math.abs(newRight) <= 175) {
                this.setState({
                    right: newRight
                })
            }
        }
        else if (event.target.id === "down") {
            console.log("move down")
            let newTop = this.state.top + 5;
            if (newTop <= 240) {
                this.setState({
                    top: newTop
                })
            }
        }
        else if (event.target.id === "incBrightness") {
            console.log("increase Brightness")
            let brightness = parseInt(this.state.brightness) + 25;
            if(brightness <= 200) {
                let brightnessPercentage = brightness.toString() + "%";
                this.setState({
                    brightness: brightnessPercentage
                })
            }
        }
        else if (event.target.id === "decBrightness") {
            console.log("decrease Brightness")
            let brightness = parseInt(this.state.brightness) - 25;
            if(brightness >= 25) {
                let brightnessPercentage = brightness.toString() + "%";
                this.setState({
                    brightness: brightnessPercentage
                })
            }
        }
     

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
                <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                    <div style={{ width: "800px", height: "600px", border: "solid black 1px" }} onKeyPress={this.handleKeyPress}><img src={specimen} style={{ width: "450px", position: "relative", top: this.state.top, right: this.state.right, filter: "brightness("+this.state.brightness+")"}} alt="Comb under microscope at 4x" />
                    </div>
                </div>
                <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <div style={{width:"200px", border:"solid black 1px", display:"flex", justifyContent:"space-around"}}>
                    <div>Brightness: </div>
                    <button id="incBrightness" onClick={this.handleChange} type="button">Up</button>
                    <button id="decBrightness" onClick={this.handleChange} type="button">Down</button>
                </div>
                <div style={{width:"200px", border:"solid black 1px", display:"flex", justifyContent:"space-around"}}>
                    <button id="top" onClick={this.handleChange} type="button">Top</button>
                    <button id="left" onClick={this.handleChange} type="button">Left</button>
                    <button id="right" onClick={this.handleChange} type="button">Right</button>
                    <button id="down" onClick={this.handleChange} type="button">Down</button>
                </div>
                </div>
            </div>
        );
    }
}

