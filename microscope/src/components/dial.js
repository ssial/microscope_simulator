import React from 'react';
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default class Dial extends React.Component {
    constructor(props) {
        super(props);
        this.state = { angle: 0}
        this.dragged =  this.dragged.bind(this);
    }

   

    dragged() {
       let rotation = Draggable.get(".draggable").rotation;
       let angle = Math.round(rotation);
       this.setState({angle:angle});
       console.log("rotation: ",rotation)
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
            onDrag: function() {
                // console.log("rotated: ",this.rotation);
            },
            onDragEnd: this.dragged,
            bounds:{minRotation:0, maxRotation:360}
        });


        // this.setState({rotation: this.myDial.rotation})

    }


    render() {
        return (
            <div style={{ textAlign: "left" }}>
                <div className="draggable" style={{ width: 200, height: 200, border: "solid black 1px", borderRadius: "50%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: 25, height: 35, backgroundColor: "green"}}></div>
                </div>
                <div style={{ marginLeft: 95, marginTop: 5 }}>{this.state.angle}</div>
            </div>
        );
    }
}