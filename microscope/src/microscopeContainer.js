import React from 'react';
import specimen1 from "./imgs/thumbnail_Scale_4X.jpg";
import specimen2 from "./imgs/thumbnail_Scale_10X.jpg";
import specimen3 from "./imgs/thumbnail_Scale_40X.jpg";

export default class MicroscopeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { top: 100, right: 25, brightness: 100, blur: "4px", lens: "4x", src: specimen1, filter: "blur"}
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
            let brightnessP = this.state.brightness + 25;
            if (brightnessP <= 200) {
                this.setState({
                    brightness: brightnessP,
                    filter: "brightness"
                })
            }
        }
        else if (event.target.id === "decBrightness") {
            console.log("decrease Brightness")
            let brightnessP = this.state.brightness - 25;
            if (brightnessP >= 25) {
                this.setState({
                    brightness: brightnessP,
                    filter: "brightness"
                })
            }
        }
        else if (event.target.id === "incBlur") {
            // console.log("decrease Brightness")
            // let brightnessP = this.state.brightness - 25;
            // if (brightnessP >= 25) {
            //     this.setState({
            //         brightness: brightnessP
            //     })
            // }
        }
        else if (event.target.id === "4x") {
            this.setState({
                lens: "4x",
                src: specimen1
            })
        }
        else if (event.target.id === "10x") {
            this.setState({
                lens: "10x",
                src: specimen2
            })
        }
        else if (event.target.id === "40x") {
            this.setState({
                lens: "40x",
                src: specimen3
            })
        }
        else if (event.target.id === "focus") {
            if(this.state.filter==="blur") {
                //if button clicked under blur state, unblur
                this.setState({
                    blur: "0px",
                    filter: "unblur",
                    brightness: 100
                })

            }
            else {
                //if button clicked under unblur state, blur
                this.setState({
                    blur: "4px",
                    filter: "blur",
                    brightness: 100
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
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "800px", height: "600px", border: "solid black 1px" }} onKeyPress={this.handleKeyPress}><img src={this.state.src} style={{ width: "450px", position: "relative", top: this.state.top, right: this.state.right, filter:(this.state.filter==="brightness") ? "brightness(" + this.state.brightness + "%)" : "blur(" + this.state.blur + ")" }} alt="Comb under microscope" />
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "225px", display: "flex", justifyContent: "space-around", margin: 5 }}>
                        <div>Brightness: {this.state.brightness}%</div>
                        <button id="incBrightness" onClick={this.handleChange} type="button">Up</button>
                        <button id="decBrightness" onClick={this.handleChange} type="button">Down</button>
                    </div>
                    <div style={{ width: "245px", display: "flex", justifyContent: "space-around", margin: 5 }}>
                        <div>Move: </div>
                        <button id="top" onClick={this.handleChange} type="button">Top</button>
                        <button id="left" onClick={this.handleChange} type="button">Left</button>
                        <button id="right" onClick={this.handleChange} type="button">Right</button>
                        <button id="down" onClick={this.handleChange} type="button">Down</button>
                    </div>
                    <div style={{ width: "170px", display: "flex", justifyContent: "space-around", margin: 5 }}>
                        <div>Lens: </div>
                        <button id="4x" onClick={this.handleChange} type="button">4x</button>
                        <button id="10x" onClick={this.handleChange} type="button">10x</button>
                        <button id="40x" onClick={this.handleChange} type="button">40x</button>
                    </div>
                    <div style={{ width: "130px", display: "flex", justifyContent: "space-around", margin: 5 }}>
                        <button id="focus" onClick={this.handleChange} type="button">Focus/Unfocus</button>
                    </div>
                </div>
            </div>
        );
    }
}

