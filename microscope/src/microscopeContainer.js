import React from 'react';
import useRef from 'react';
import specimen1 from "./imgs/thumbnail_Scale_4X.jpg";
import specimen2 from "./imgs/thumbnail_Scale_10X.jpg";
import specimen3 from "./imgs/thumbnail_Scale_40X.jpg";

export default class MicroscopeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { top: 120, left: 0, brightness: 100, blur: "4px", lens: "4x", src: specimen1, filter: "blur", zoom: 1 }

    }

    componentDidMount() {
        // var centerLeftPos = (document.getElementById("original4ximgContainer").width)/2 - (document.getElementById("original4ximg").width)/2;
        // let positionRefs = useRef([]);
        // positionRefs.current = [0,0].map(
        //     (ref, index) =>   positionRefs.current[index] = React.createref()
        // )
        // var centerLeftPos = this.imgRef.current.width;
        // var centerTopPos = this.imgRef.current.height;
        // console.log(centerLeftPos,"& ", centerTopPos);
        // console.log("wid:", this.containerRef.width, "height: ",this.containerRef.height)
        // // var centerTopPos = (document.getElementById("original4ximgContainer").height)/2 - (document.getElementById("original4ximg").height)/2;
        // // console.log("centerLeft: ",centerLeftPos," centerTop:", centerTopPos);
        // this.setState({
        //     top: centerTopPos,
        //     left:centerLeftPos
        // })
    }



    handleChange = event => {
        var leftLimit = (document.getElementById("original4xImgContainer").scrollWidth) / 2 - (document.getElementById("original4xImg").scrollWidth) / 2;
        var topLimit = (document.getElementById("original4xImgContainer").scrollHeight) / 2 - (document.getElementById("original4xImg").scrollHeight) / 2;


        console.log(topLimit, " x ", leftLimit)

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
            let newLeft = this.state.left - 5;
            if (newLeft >= -leftLimit) {
                this.setState({
                    left: newLeft
                })
            }
        }
        else if (event.target.id === "right") {
            console.log("move right")
            let newRight = this.state.left + 5;
            if (newRight <= leftLimit) {
                this.setState({
                    left: newRight
                })
            }
        }
        else if (event.target.id === "down") {
            console.log("move down")
            let newTop = this.state.top + 5;
            if (newTop <= topLimit * 2) {
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
        else if (event.target.id === "4xOriginal") {
            this.setState({
                lens: "4xOriginal",
                src: specimen1
            })
        }
        else if (event.target.id === "10xOriginal") {
            this.setState({
                lens: "10xOriginal",
                src: specimen2
            })
        }
        else if (event.target.id === "40xOriginal") {
            this.setState({
                lens: "40xOriginal",
                src: specimen3
            })
        }
        else if (event.target.id === "4xZoom") {
            this.setState({
                zoom: 1
            })
        }
        else if (event.target.id === "10xZoom") {
            this.setState({
                zoom: 2.5
            })
        }
        else if (event.target.id === "40xZoom") {
            this.setState({
                zoom: 10
            })
        }
        else if (event.target.id === "focus") {
            if (this.state.filter === "blur") {
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
                    <div style={{ width: "80%", border: "solid black 1px", display: "flex" }}>
                        <div style={{ width: "50%", border: "solid black 1px", textAlign: "left", display: "flex" }}>
                            <div style={{ margin: 10 }}><b>Original:</b></div>
                            <div style={{ width: "170px", display: "flex", justifyContent: "space-around", margin: 5 }}>
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>Lens: </div>
                                <button id="4xOriginal" onClick={this.handleChange} type="button">4x</button>
                                <button id="10xOriginal" onClick={this.handleChange} type="button">10x</button>
                                <button id="40xOriginal" onClick={this.handleChange} type="button">40x</button>
                            </div>
                        </div>
                        <div style={{ width: "50%", border: "solid black 1px", textAlign: "left", display: "flex" }}>
                            <div style={{ margin: 10 }}><b>Zoom:</b></div>
                            <div style={{ width: "170px", display: "flex", justifyContent: "space-around", margin: 5 }}>
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>Lens: </div>
                                <button id="4xZoom" onClick={this.handleChange} type="button">4x</button>
                                <button id="10xZoom" onClick={this.handleChange} type="button">10x</button>
                                <button id="40xZoom" onClick={this.handleChange} type="button">40x</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "80%", height: 700, border: "solid black 1px" }} onKeyPress={this.handleKeyPress}>
                        <div style={{ width: "100%", display: "flex", height: 700 }}>
                            <div id="original4xImgContainer" style={{ width: "50%", height: "100%", border: "solid black 1px" }}>
                                <img id="original4xImg" src={this.state.src} style={{ width: "75%", height: 402, position: "relative", top: this.state.top, left: this.state.left, filter: (this.state.filter === "brightness") ? "brightness(" + this.state.brightness + "%)" : "blur(" + this.state.blur + ")" }} alt="Comb under microscope" />
                            </div>
                            <div id="zoom4xImgContainer" style={{ width: "50%", height: "100%", border: "solid black 1px", display: "flex", justifyContent: "center" }}>
                                <div style={{ height: 402, width: "75%", overflow: "scroll", position: "relative", top: "120px" }}>
                                    <img id="zooml4xImg" src={specimen1} style={{ width: "100%", transform: "scale(" + this.state.zoom + ")" }} alt="Comb under microscope" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "80%", marginTop:5}}>
                        <div style={{ width: "50%", display: "flex", justifyContent: "center"}}>
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

                            <div style={{ width: "130px", display: "flex", justifyContent: "space-around", margin: 5 }}>
                                <button id="focus" onClick={this.handleChange} type="button">Focus/Unfocus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

