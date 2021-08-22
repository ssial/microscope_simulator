import React from 'react';
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

// Initialize Draggable library
gsap.registerPlugin(Draggable);

export default class Dial extends React.Component {
    constructor(props) {
        super(props);
        this.state = { angle: 0, direction: "" }
        this.dragged = this.dragged.bind(this);
        this.dial = React.createRef();
    }


    dragged() {
        // get the current angle of dial
        let rotation = Draggable.get(this.dial.current).rotation;
        let angle = Math.round(rotation);
        let data = {
            state: this.state,
            name: this.props.name
        }
        this.setState({ angle: angle, direction: Draggable.get(this.dial.current).getDirection() });
        this.props.callback(data);
    }

    componentDidUpdate(prevProps) {
        // update the position/angle of dial to a specific rotation 
        if (this.props.rotation !== prevProps.rotation) {
            gsap.set(this.dial.current, { rotation: this.props.rotation });
            Draggable.get(this.dial.current).update();
        }
    }

    componentDidMount() {
        // create a dial
        let myDial = Draggable.create(this.dial.current, {
            type: "rotation",
            inertia: "true",
            onDrag: this.dragged,
            onDragEnd: function () {
                // console.log("rotated: ",this.rotation);
            },
            bounds: { minRotation: 0, maxRotation: 360 }
        });

        // set position/angle of dial to a specific rotation
        gsap.set(this.dial.current, { rotation: this.props.rotation });

        Draggable.get(this.dial.current).update();
    }


    render() {
        return (
            <React.Fragment>
                <div style={{ transform: "rotate(180deg)", width: this.props.dialStyle.width, marginTop: 15, marginBottom: 15 }}>
                    <div ref={this.dial} style={this.props.dialStyle}>
                        <div style={this.props.pointerStyle}></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}