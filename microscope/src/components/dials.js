
import React from 'react';
import Dial from './dial'

let styles = {
    coarseFocus: {
        dial: {
            width: 200, height: 200, border: "solid #373737 5px", borderRadius: "50%", display: "flex", justifyContent: "center", backgroundColor: "#111111", boxSizing: "border-box"
        },
        pointer: {
            width: 12, height: 24, backgroundColor: "#373737"
        }
    },
    fineFocus: {
        dial: {
            width: 130, height: 130, border: "solid #373737 5px", borderRadius: "50%", display: "flex", justifyContent: "center", backgroundColor: "#494949", boxSizing: "border-box"
        },
        pointer: {
            width: 17, height: 17, backgroundColor: "#D8D8D8", borderRadius: "50%"
        }
    },
    verticalStage: {
        dial: {
            width: 130, height: 130, border: "solid #373737 5px", borderRadius: "50%", display: "flex", justifyContent: "center", backgroundColor: "#111111", boxSizing: "border-box"
        },
        pointer: {
            width: 12, height: 24, backgroundColor: "#373737"
        }
    },

}

export default class Dials extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: null,
            direction: ""
        }
    }

    dialsCallback = (angleData) => {
        // console.log(angleData)
        this.setState({angle: angleData.state.angle, direction: angleData.state.direction})
        this.props.callback(angleData);
    }

  

    render() {
        return (
            <React.Fragment>
                <div style={{ display: "flex", flexDirection: "column", width: 200, alignItems: "center",float: "right", marginTop: 140, marginRight: 60 }}>
                    <div style={{ fontSize: "1.15em", color: "#d2d2d2" }}>Focus Knobs</div>
                    <Dial dialStyle={styles.coarseFocus.dial} pointerStyle={styles.coarseFocus.pointer} rotation={this.props.rotationC} name="coarseFocus" callback={this.dialsCallback}/>
                    <div style={{ position: "relative", top: 0, transform: "translateY(-195px)" }}>
                        <Dial dialStyle={styles.fineFocus.dial} pointerStyle={styles.fineFocus.pointer} rotation={this.props.rotationF}  name="fineFocus" callback={this.dialsCallback} />
                    </div>
                    <div style={{transform:"translateY(-135px)"}}>
                        <div style={{ fontSize: "1.15em", marginTop: 20, color: "#d2d2d2" }}>Stage Knobs</div>
                        <Dial dialStyle={styles.verticalStage.dial} pointerStyle={styles.verticalStage.pointer} rotation={this.props.rotationV}  name="verticalStage" callback={this.dialsCallback}/>
                        <Dial dialStyle={styles.fineFocus.dial} pointerStyle={styles.fineFocus.pointer} rotation={this.props.rotationH} name="horizontalStage" callback={this.dialsCallback}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}