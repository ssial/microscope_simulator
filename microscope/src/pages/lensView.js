import React from 'react';
import Dials from '../components/dials'
import ViewCircle from '../components/viewCircle'
import Lenses from '../components/lenses'
import Checklist from '../components/checklist'
import helpIcon from '../imgs/help.png'

export default class LensView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: null, yOffset: 0, direction: "", xOffset: 0, blur: 0, rotationC: 0, rotationF: 0, rotationV: 0, rotationH: 0, scale: 1, activeLens: "fourX", coarseFocusCheck: "unchecked", fineFocusCheck: "unchecked", idealAngleC: 0, idealAngleF: 0, currAngleC: 0, currAngleF: 0, activeSpecimen: "sunflower"
        }
    }

    resetFineFocusIdealAngle() {

        let min = Math.ceil(135);
        let max = Math.floor(225);

        const idealAngleF = Math.floor(Math.random() * (max - min + 1) + min);
        this.setState({ idealAngleF: idealAngleF });
    }

    setRandomOffsets() {
        // Calculate random ideal angles on dial for coarse focus and fine focus between 135 - 225
        let min = Math.ceil(135);
        let max = Math.floor(225);
        const idealAngleC = Math.floor(Math.random() * (max - min + 1) + min);
        const idealAngleF = Math.floor(Math.random() * (max - min + 1) + min);
        this.setState({ idealAngleC: idealAngleC, idealAngleF: idealAngleF });

        min = Math.ceil(0);
        max = Math.floor(360);

        // calculating random dial positions for each dial
        const rotationV = Math.floor(Math.random() * (max - min + 1) + min);
        const rotationH = Math.floor(Math.random() * (max - min + 1) + min);
        const rotationC = Math.floor(Math.random() * (max - min + 1) + min);
        const rotationF = Math.floor(Math.random() * (max - min + 1) + min);

        this.setState({ rotationC: rotationC, rotationF: rotationF, rotationH: rotationH, rotationV: rotationV })
        this.calculateOffset("verticalStage", rotationV);
        this.calculateOffset("horizontalStage", rotationH);
        this.calculateFineFocus(rotationF);
        this.calculateCoarseFocus(rotationC);
    }

    componentDidMount() {
        this.setRandomOffsets()

    }

    calculateCoarseFocus(angle) {
        // let angle = this.state.angle;
        const idealAngle = this.state.idealAngleC;
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

        console.log("comparing angle ", angle, " idealAngle ", idealAngle)
        if ((angle >= minIdeal) && (angle <= maxIdeal)) {
            console.log("check");
            this.setState({ coarseFocusCheck: "checked" })
        }
        else {
            console.log("uncheck");
            this.setState({ coarseFocusCheck: "unchecked" })
        }

        this.setState({ blur: blur, currAngleC: angle });
    }

    calculateFineFocus(angle) {
        // let angle = this.state.angle;
        const idealAngle = this.state.idealAngleF;
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

        console.log("comparing angle ", angle, " idealAngle ", idealAngle)
        if ((angle >= minIdeal) && (angle <= maxIdeal)) {
            this.setState({ fineFocusCheck: "checked" })
            console.log("check");
        }
        else {
            console.log("uncheck");
            this.setState({ fineFocusCheck: "unchecked" })
        }

        this.setState({ blur: blur, currAngleF: angle });
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

        this.resetFineFocusIdealAngle()
        this.calculateFineFocus(this.state.currAngleF)
    }

    specimenCallback = (activeSpecimen) => {
        this.setState({activeSpecimen: activeSpecimen})
    }

    render() {
        return (
            <React.Fragment>
                <img src={helpIcon} style={{ position: "absolute", width: 50, right: 60 }} />
                <Checklist coarseFocusCheck={this.state.coarseFocusCheck} fineFocusCheck={this.state.fineFocusCheck} callback={this.specimenCallback}/>
                <Lenses callback={this.lensesCallback} />
                <ViewCircle angle={this.state.angle} yOffset={this.state.yOffset} xOffset={this.state.xOffset} blur={this.state.blur} scale={this.state.scale} activeSpecimen={this.state.activeSpecimen} />
                <Dials callback={this.dialsCallback} rotationC={this.state.rotationC} rotationF={this.state.rotationF} rotationH={this.state.rotationH} rotationV={this.state.rotationV} />
            </React.Fragment>
        )
    }

}