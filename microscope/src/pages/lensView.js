import React from 'react';
import Dials from '../components/dials'
import ViewCircle from '../components/viewCircle'

export default class LensView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: null, yOffset:  0, direction: ""
        }
    }

    calculateVerticalOffset() {
        let offset = 0;
        let angle = this.state.angle;
        if(angle) {
            if(this.state.direction == "clockwise") {
                // offset = Math.round((angle/180)*-100);
                offset = Math.round((angle/360)*100);
            }
            else {
                // offset = Math.round(((angle - 180)/180)*-100);
                offset = Math.round((angle/360)*-100);
            }
            // offset = Math.round((angle/360)*100)
        }
        this.setState({yOffset: offset})
        console.log("angle: ",angle," offset: ",offset);
    }

    dialsCallback = (angleData) => {
        this.setState({angle: angleData.angle, direction: angleData.direction})
        this.calculateVerticalOffset();
    }

    render() {
        return (
            <React.Fragment>
                <ViewCircle angle={this.state.angle} yOffset={this.state.yOffset}/>

                <Dials callback={this.dialsCallback}/>

            </React.Fragment>
        )
    }

}