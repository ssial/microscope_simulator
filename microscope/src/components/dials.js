
import React from 'react';
import Dial from './dial'

let styles = {
    coarseFocus: {
        dial: {
            width: 200, height: 200, border: "solid #373737 5px", borderRadius: "50%", display: "flex", justifyContent: "center", backgroundColor: "#111111", boxSizing: "border-box"
        },
        pointer: {
            width: 12, height: 35, backgroundColor: "#373737"
        }
    },
    fineFocus: {
        dial: {
            width: 150, height: 150, border: "solid #373737 5px", borderRadius: "50%", display: "flex", justifyContent: "center", backgroundColor: "#494949", boxSizing: "border-box"
        },
        pointer: {
            width: 18, height: 18, backgroundColor: "#D8D8D8", borderRadius: "50%"
        }
    }
}

export default class Dials extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Dial dialStyle={styles.coarseFocus.dial} pointerStyle={styles.coarseFocus.pointer} rotation="45" />
                <Dial dialStyle={styles.fineFocus.dial} pointerStyle={styles.fineFocus.pointer} rotation="207" />
            </React.Fragment>
        )
    }

}