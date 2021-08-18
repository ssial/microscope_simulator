import React from 'react';
import Dials from '../components/dials'
import ViewCircle from '../components/viewCircle'
import Lenses from '../components/lenses'

export default class LensView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: null, yOffset: 0, direction: "", xOffset: 0, blur: 0, rotationC: 0, rotationF: 0, rotationV: 0, rotationH: 0, scale: 1
        }
    }

    componentDidMount() {
        let idealAngleC = 135;
        let idealAngleF = 225;
        let rotationV = 135;
        let rotationH = 100;
        let rotationC = 225;
        let rotationF = 100;
        this.setState({rotationC: rotationC, rotationF: rotationF, rotationH: rotationH, rotationV: rotationV})
        let yOffset = this.calculateOffset("verticalStage",rotationV);
        let xOffset = this.calculateOffset("horizontalStage",rotationH);
        let blur = this.calculateCoarseFocus(rotationC);
       
    }

    calculateCoarseFocus(angle) {
        // let angle = this.state.angle;
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

    calculateFineFocus(angle) {
        // let angle = this.state.angle;
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

    calculateOffset(name, angle) {
        let offset = 0;
        // let angle = this.state.angle;
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
            this.calculateOffset(angleData.name, this.state.angle);
        }
        else if (angleData.name === "coarseFocus") {
            this.calculateCoarseFocus(this.state.angle);
        }
        else if (angleData.name === "fineFocus") {
            this.calculateFineFocus(this.state.angle);
        }
    }

    render() {
        return (
            <React.Fragment>
                 <Lenses/>
                <ViewCircle angle={this.state.angle} yOffset={this.state.yOffset} xOffset={this.state.xOffset} blur={this.state.blur} />

                <Dials callback={this.dialsCallback} rotationC={this.state.rotationC} rotationF={this.state.rotationF} rotationH={this.state.rotationH} rotationV={this.state.rotationV} />
               
            </React.Fragment>
        )
    }

}