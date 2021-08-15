import React from 'react';
import Dials from '../components/dials'
import ViewCircle from '../components/viewCircle'

export default class LensView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: null, yOffset: 0, direction: "", xOffset: 0
        }
    }

    calculateOffset(name) {
        let offset = 0;
        let angle = this.state.angle;
        // if (angle) {
        // if (this.state.direction == "clockwise"||"anti-clockwise") {
        if (angle >= 180) {
            // offset = Math.round((angle / 360) * 100);
            offset = Math.round(100 - (((360 - angle) / 180) * 100));
        }
        else if (angle === 0) {
            offset = -100;
        }
        else {

            // offset = Math.round((angle / 360) * -100);
            offset = Math.round((100 - ((angle / 180)) * 100) * -1);
        }

        // }
        if(name === "verticalStage" ) {
            this.setState({ yOffset: offset })
        }
        else {
            this.setState({ xOffset: offset })
        }
        
        console.log("angle: ", angle, " offset: ", offset, " direction: ", this.state.direction);
    }

    dialsCallback = (angleData) => {
        this.setState({ angle: angleData.state.angle, direction: angleData.state.direction })
        if (angleData.name === "verticalStage" || "horizontalStage") {
            this.calculateOffset(angleData.name);
        }

    }

    render() {
        return (
            <React.Fragment>
                <ViewCircle angle={this.state.angle} yOffset={this.state.yOffset} xOffset={this.state.xOffset} />

                <Dials callback={this.dialsCallback} />

            </React.Fragment>
        )
    }

}