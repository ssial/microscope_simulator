import React from 'react';
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default class Dial extends React.Component {
    constructor(props) {
        super(props);
        this.state = { angle: 0, rotation: 0, spinCounter: 0, angle: 0}
        this.calculateSpinCounter = this.calculateSpinCounter.bind(this);
        this.getAngle = this.getAngle.bind(this);
        this.myDial = null;
        this.dragged =  this.dragged.bind(this);
    }

    calculateSpinCounter(rotation) {
        let spinCount = this.state.spinCounter;
        let tempCounter = spinCount + 1;
        if (rotation > (360 * tempCounter)) {
            spinCount = spinCount + 1;
            // console.log("spins: ", spinCount);
            this.setState({spinCounter: spinCount})
        }

       

        return spinCount;
    }

    getAngle(rotation) {
        let angle = Math.round(rotation - (360 * this.state.spinCounter));
        // console.log("angle: ", angle);
        this.setState({angle: angle})
        return angle;
    }

    dragged() {
       let rotation = Draggable.get(".draggable").rotation;
       console.log("rotation: ",rotation)
       this.calculateSpinCounter(rotation);
       this.getAngle(rotation);
       console.log("spins: ",this.state.spinCounter);
       console.log("angle: ",this.state.angle);
    //    this.getAngle(rotation,this.calculateSpinCounter(rotation));
       
    }



    componentDidMount() {

        this.myDial = Draggable.create(".draggable", {
            type: "rotation",
            inertia: "true",
            onPress: function () {
                console.log("clicked");
            },
            onDragEnd: this.dragged
        });


        // this.setState({rotation: this.myDial.rotation})

    }


    render() {
        return (
            <div style={{ textAlign: "left" }}>
                <div className="draggable" style={{ width: 200, height: 200, border: "solid black 1px", borderRadius: "50%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: 25, height: 25, borderRadius: "50%", backgroundColor: "green", marginTop: 10 }}></div>
                </div>
                <div style={{ marginLeft: 95, marginTop: 5 }}>{this.state.angle}</div>
            </div>
        );
    }
}