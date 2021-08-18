import React from 'react';
import Dials from '../components/dials'
import ViewCircle from '../components/viewCircle'
import Lenses from '../components/lenses'
import Checklist from '../components/checklist'

export default class LensView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: null, yOffset: 0, direction: "", xOffset: 0, blur: 0, rotationC: 0, rotationF: 0, rotationV: 0, rotationH: 0, scale: 1, activeLens: "fourX", coarseFocusCheck: "unchecked", fineFocusCheck: "unchecked"
        }
    }

    componentDidMount() {
        let idealAngleC = 135;
        let idealAngleF = 225;
        let rotationV = 135;
        let rotationH = 100;
        let rotationC = 225;
        let rotationF = 100;
        this.setState({ rotationC: rotationC, rotationF: rotationF, rotationH: rotationH, rotationV: rotationV })
        let yOffset = this.calculateOffset("verticalStage", rotationV);
        let xOffset = this.calculateOffset("horizontalStage", rotationH);
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
            percentage = angle / idealAngle;
            blur = ((distance - (percentage * distance)) + idealVal).toFixed(2);
        }
        else {
            const angleTemp = 360 - angle;
            const idealAngleTemp = 360 - idealAngle;
            percentage = angleTemp / idealAngleTemp;
            blur = ((distance - (percentage * distance)) + idealVal).toFixed(2);
        }

        const minIdeal = idealAngle - 10;
        const maxIdeal = idealAngle + 10;

        if ((angle >= minIdeal) && (angle <= maxIdeal)) {
            this.setState({ coarseFocusCheck: "checked" })
            console.log(this.state.coarseFocusCheck);
        }
        else {
            this.setState({ coarseFocusCheck: "unchecked" })
        }

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
       
        const minIdeal = idealAngle - 10;
        const maxIdeal = idealAngle + 10;

        if ((angle >= minIdeal) && (angle <= maxIdeal)) {
            this.setState({ fineFocusCheck: "checked" })
            console.log(this.state.fineFocusCheck);
        }
        else {
            this.setState({ fineFocusCheck: "unchecked" })
        }

        this.setState({ blur: blur });
    }

    calculateOffset(name, angle) {
        let offset = 0;

        if (angle >= 180) {
            offset = Math.round(100 - (((360 - angle) / 180) * 100));
        }
        else if (angle === 0) {
            offset = -100;
        }
        else {
            offset = Math.round((100 - ((angle / 180)) * 100) * -1);
        }

        if (this.state.scale === 2.5) {
            offset = offset * (2.5 / 2)
        }
        else if (this.state.scale === 10) {
            offset = offset * (10 / 2)
        }


        if (name === "verticalStage") {
            this.setState({ yOffset: offset })
        }
        else if ((name === "horizontalStage")) {
            this.setState({ xOffset: offset })
        }

        // console.log("angle: ", angle, " offset: ", offset, " direction: ", this.state.direction);
    }

    dialsCallback = (angleData) => {
        this.setState({ angle: angleData.state.angle, direction: angleData.state.direction });
        // console.log(angleData.name);
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

    lensesCallback = (activeLens) => {

        this.setState({ activeLens: activeLens })
        if (activeLens === "fourX") {
            this.setState({ scale: 1 })
        }
        else if (activeLens === "tenX") {
            this.setState({ scale: 2.5 })
        }
        else if (activeLens === "fourtyX") {
            this.setState({ scale: 10 })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Checklist coarseFocusCheck={this.state.coarseFocusCheck} fineFocusCheck={this.state.fineFocusCheck}/>
                <Lenses callback={this.lensesCallback} />
                <ViewCircle angle={this.state.angle} yOffset={this.state.yOffset} xOffset={this.state.xOffset} blur={this.state.blur} scale={this.state.scale} />
                <Dials callback={this.dialsCallback} rotationC={this.state.rotationC} rotationF={this.state.rotationF} rotationH={this.state.rotationH} rotationV={this.state.rotationV} />
            </React.Fragment>
        )
    }

}