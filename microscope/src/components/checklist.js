import React from 'react';
import checkmark from '../imgs/check-mark.png'

let styles = {
    container: {
        position: "absolute", width: 270, marginLeft: 60, top: "13%"
    },
    title: {
        color: "#d2d2d2", backgroundColor: "#111111", lineHeight: 2.2, fontSize: "1.15em", fontWeight: "bold"
    },
    item: {
        color: "#d2d2d2", backgroundColor: "#4C4C4C", lineHeight: 2.2, fontSize: "1.15em", marginTop: 5, display: "flex", alignItems: 'center', fontWeight: "500"
    },
    square: {
        width: 24, height: 24, backgroundColor: "#D8D8D8", marginLeft: 15, marginRight: 15
    },
    checkmark: {
        width: 30, transform: "translate(5px,-5px)"
    },
    active: {
        border: "solid #373737 5px"
    },
    specimen: {
        lineHeight: 2.2, paddingLeft: 20, marginTop: 5, fontWeight: "500", boxSizing:"border-box", border: "solid #272727 5px" 
    },
    boldText: {
        color:'#FDFE66', fontWeight:"500"
    },
    tipsContainer: {
        height: 350, textAlign: "left", paddingTop: 10, paddingLeft: 10
    },
    tipStyle:{
        color: "#F8E71C", fontStyle: "italic"
    },
    selectionContainer: {
        textAlign: "left", color: "#d2d2d2", fontSize: "1.1em", paddingTop: 10, paddingLeft: 10, width: 200 
    }
}

export default class Checklist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSpecimen: "sunflower"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    // set active specimen
    handleClick(el) {
        if(this.state.activeSpecimen!== el.target.id) {
            this.setState({activeSpecimen: el.target.id});
            this.props.callback(el.target.id);
        }
       
    }

    componentDidUpdate(prevProps) {
        if (this.props.coarseFocusCheck !== prevProps.coarseFocusCheck) {
            console.log("update - ", this.props.coarseFocusCheck)
        }
        if (this.props.fineFocusCheck !== prevProps.fineFocusCheck) {
            // console.log("update - ", this.props.fineFocusCheck)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={styles.container}>
                    <div style={styles.title}>Preperation Checklist</div>
                    <div style={styles.item}><div style={styles.square}><img className={this.props.coarseFocusCheck} style={styles.checkmark} src={checkmark} /></div>Coarse Focus</div>
                    <div style={styles.item}><div style={styles.square}><img className={this.props.fineFocusCheck} style={styles.checkmark} src={checkmark} /></div>Fine Focus</div>
                    <div style={styles.item}><div style={styles.square}><img className="checked" style={styles.checkmark} src={checkmark} /></div>Iris Diaphragm</div>
                    <div style={styles.tipsContainer}>
                        <span style={{ color: "#d2d2d2", fontSize: "1.15em", fontWeight: "bold" }}>Tips:</span>
                        <p style={styles.tipStyle}>Click on the <span style={{ color: "#4A90E2", fontWeight: "500" }}>blue help icon</span> to learn how to adjust the dials and controls.</p>
                        <p style={styles.tipStyle}><span style={styles.boldText}>Adjust stage dials</span> to <span style={styles.boldText}>move specimen vertically</span> (top stage dial) or <span style={styles.boldText}>horizontally</span> (bottom stage dial) until specimen's position is centered.</p>
                        <p style={styles.tipStyle}><span style={styles.boldText}>Adjust coarse focus</span> (black outermost focus dial) to bring specimen into view. Then <span style={styles.boldText}>adjust fine focus</span> (grey innermost focus dial) to bring details into focus.</p>
                    </div>
                    <div style={styles.selectionContainer}>
                        <span style={{ fontSize: "1.15em", fontWeight: "bold" }}>Select Specimen:</span>
                        <div id="sunflower" onClick={this.handleClick} className={this.state.activeSpecimen === "sunflower" ? "specimenButton activeSpecimen": "specimenButton"} style={styles.specimen}>Sunflower Stem</div>
                        <div id="corn" onClick={this.handleClick} className={this.state.activeSpecimen === "corn" ? "specimenButton activeSpecimen": "specimenButton"} style={styles.specimen}>Corn Stem</div>
                        <div id="onion" onClick={this.handleClick} className={this.state.activeSpecimen === "onion" ? "specimenButton activeSpecimen": "specimenButton"} style={styles.specimen}>Onion Root</div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}