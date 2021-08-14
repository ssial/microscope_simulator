import React from 'react';
import Dials from '../components/dials'
import ViewCircle from '../components/viewCircle'

export default class LensView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: null, yOffset: 0, direction: ""
        }
    }

    calculateVerticalOffset() {
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
        this.setState({ yOffset: offset })
        console.log("angle: ", angle, " offset: ", offset, " direction: ", this.state.direction);
    }

    dialsCallback = (angleData) => {
        this.setState({ angle: angleData.state.angle, direction: angleData.state.direction })
        if (angleData.name === "verticalStage") {
            this.calculateVerticalOffset();
        }

    }

    render() {
        return (
            <React.Fragment>
                <ViewCircle angle={this.state.angle} yOffset={this.state.yOffset} />

                <Dials callback={this.dialsCallback} />

            </React.Fragment>
        )
    }

}