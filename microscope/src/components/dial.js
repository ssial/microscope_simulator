import React from 'react';
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default class Dial extends React.Component {
    constructor(props) {
        super(props);
        this.state = { angle: 0 }
        this.dragged = this.dragged.bind(this);
        this.dial = React.createRef();
    }



    dragged() {
        let rotation = Draggable.get(this.dial.current).rotation;
        let angle = Math.round(rotation);
        this.setState({ angle: angle });
        console.log("rotation: ", rotation)
        console.log("angle: ", this.state.angle);
        //    this.getAngle(rotation,this.calculateSpinCounter(rotation));

    }



    componentDidMount() {

        let myDial = Draggable.create(this.dial.current, {
            type: "rotation",
            inertia: "true",
            onPress: function () {
                console.log("clicked");
            },
            onDrag: function () {
                // console.log("rotated: ",this.rotation);
            },
            onDragEnd: this.dragged,
            bounds: { minRotation: 0, maxRotation: 360 }
        });

        gsap.set(this.dial.current, { rotation: this.props.rotation });

        Draggable.get(this.dial.current).update();




        // this.setState({rotation: this.myDial.rotation})

    }


    render() {
        return (
            <React.Fragment>
                <div style={{transform: "rotate(180deg)", width:this.props.dialStyle.width}}>
                    <div ref={this.dial} style={this.props.dialStyle}>
                        <div style={this.props.pointerStyle}></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}