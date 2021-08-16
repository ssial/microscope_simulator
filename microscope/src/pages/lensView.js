import React from 'react';
import Dials from '../components/dials'
import ViewCircle from '../components/viewCircle'

export default class LensView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: null, yOffset: 0, direction: "", xOffset: 0, blur: 0
        }
    }

    calculateCoarseFocus() {
        let angle = this.state.angle;
        const idealAngle = 135;
        const idealVal = 0.5;
        let blur = 0;
        let maxVal = 3;
        let distance = maxVal - idealVal;
        let percentage = 0;

        if (angle <= idealAngle) {
            // fortyfiveDegreeIncrements = idealAngle / 45;
            // maxVal = (idealVal * fortyfiveDegreeIncrements) + idealVal;
            // distance = maxVal - idealVal;
            percentage = angle / idealAngle;
            blur = ((distance - (percentage * distance)) + idealVal).toFixed(2);
        }
        else {
            const angleTemp = 360 - angle;
            const idealAngleTemp = 360 - idealAngle;
            // fortyfiveDegreeIncrements = idealAngleTemp / 45;
            // maxVal = (idealVal * fortyfiveDegreeIncrements) + idealVal;
            // distance = maxVal - idealVal;
            percentage = angleTemp / idealAngleTemp;
            blur = ((distance - (percentage * distance)) + idealVal).toFixed(2);
        }
        console.log("blur: ", blur);

        this.setState({ blur: blur });
    }

    calculateFineFocus() {
        let angle = this.state.angle;
        const idealAngle = 225;
        const idealVal = 0;
        let blur = 0;
        let maxVal = 0.5;
        let distance = maxVal - idealVal;
        let percentage = 0;

        if (angle <= idealAngle) {
            percentage = angle / idealAngle;
            blur = ((distance - (percentage * distance)) + idealVal).toFixed(2);
        }
        else {
            const angleTemp = 360 - angle;
            const idealAngleTemp = 360 - idealAngle;
            percentage = angleTemp / idealAngleTemp;
            blur = ((distance - (percentage * distance)) + idealVal).toFixed(2);
        }
        console.log("blur: ", blur);

        this.setState({ blur: blur });
    }

    calculateOffset(name) {
        let offset = 0;
        let angle = this.state.angle;
        console.log("CALC OFFSET")
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
        if (name==="verticalStage") {
            this.setState({ yOffset: offset })
        }
        else if ((name==="horizontalStage")) {
            this.setState({ xOffset: offset })
        }

        console.log("angle: ", angle, " offset: ", offset, " direction: ", this.state.direction);
    }

    dialsCallback = (angleData) => {
        this.setState({ angle: angleData.state.angle, direction: angleData.state.direction });
        console.log(angleData.name);
        if (angleData.name === "verticalStage" || angleData.name === "horizontalStage") {
            this.calculateOffset(angleData.name);
        }
        else if (angleData.name === "coarseFocus") {
            this.calculateCoarseFocus();
        }
        else if (angleData.name === "fineFocus") {
            this.calculateFineFocus();
        }
    }

    render() {
        return (
            <React.Fragment>
                <ViewCircle angle={this.state.angle} yOffset={this.state.yOffset} xOffset={this.state.xOffset} blur={this.state.blur}/>

                <Dials callback={this.dialsCallback} />

            </React.Fragment>
        )
    }

}