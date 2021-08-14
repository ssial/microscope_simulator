import React from 'react';
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default class Dial extends React.Component {
    constructor(props) {
        super(props);
        this.state = { angle: 0, direction: "" }
        this.dragged = this.dragged.bind(this);
        this.dial = React.createRef();
    }

    dragStart() {
        // let rotation = Draggable.get(this.dial.current).rotation;
        // let angle = Math.round(rotation);
        // this.setState({initialAngle: angle});
        // console.log(Draggable.get(this.dial.current).rotation)
    }


    dragged() {
        let rotation = Draggable.get(this.dial.current).rotation;
        let angle = Math.round(rotation);
        let data = {
            state: this.state,
            name: this.props.name
        }
        this.setState({ angle: angle, direction: Draggable.get(this.dial.current).getDirection()});
        this.props.callback(data);

        // console.log("rotation: ", rotation)
        // console.log("angle: ", this.state.angle);

        // if(this.state.initialAngle<angle) {
        //     console.log("C ");
        // }
        // else {
        //     console.log("CO ");
        // }

    

    }



    componentDidMount() {

        let myDial = Draggable.create(this.dial.current, {
            type: "rotation",
            inertia: "true",
            // onPress: this.dragStart,
            // onDragStart: this.dragStart,
            onDrag: this.dragged,
            onDragEnd: function () {
                // console.log("rotated: ",this.rotation);
            },
            bounds: { minRotation: 0, maxRotation: 360 }
        });

        gsap.set(this.dial.current, { rotation: this.props.rotation });

        Draggable.get(this.dial.current).update();

        // this.setState({rotation: this.myDial.rotation})

    }


    render() {
        return (
            <React.Fragment>
                <div style={{transform: "rotate(180deg)", width:this.props.dialStyle.width, marginTop:15, marginBottom:15}}>
                    <div ref={this.dial} style={this.props.dialStyle}>
                        <div style={this.props.pointerStyle}></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}