import React from 'react';
import checkmark from '../imgs/check-mark.png'

let styles = {
    container: {
        position: "absolute", width: 300, marginLeft: 60, top: 35
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
    }
}

export default class Checklist extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div style={styles.container}>
                    <div style={styles.title}>Preperation Checklist</div>
                    <div style={styles.item}><div style={styles.square}><img className="unchecked" style={styles.checkmark} src={checkmark} /></div>Coarse Focus</div>
                    <div style={styles.item}><div style={styles.square}><img className="unchecked" style={styles.checkmark} src={checkmark} /></div>Fine Focus</div>
                    <div style={styles.item}><div style={styles.square}><img className="checked" style={styles.checkmark} src={checkmark} /></div>Iris Diaphragm</div>
                </div>
            </React.Fragment>
        )
    }
}