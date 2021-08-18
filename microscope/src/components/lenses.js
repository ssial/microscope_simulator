import React from 'react';

let styles = {
    container: {
        width: 275, display: "flex", justifyContent: "space-evenly", marginLeft: "50%", transform: "translateX(-50%)", marginTop: 35, alignItems: "flex-end"
    },
    fourX: {
        width: 52, height: 52, border: "solid #D0021B 3px", borderRadius: "50%", boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "1.8em"
    },
    tenX: {
        width: 59, height: 59, border: "solid #F8E71C 2px", borderRadius: "50%", boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "1.7em"
    },
    fortyX: {
        width: 64, height: 64, border: "solid #2CA059 2px", borderRadius: "50%", boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "1.7em"
    },
    active: {
        boxShadow: "0 0 50px #ccc"
    }
}

export default class Lenses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeLens: "fourX"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(el) {
        if(this.state.activeLens !== el.target.id) {
            this.setState({activeLens: el.target.id});
            this.props.callback(el.target.id);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={styles.container}>
                    <div id="fourX" className={this.state.activeLens === "fourX" ? "activeLens": "inactiveLens"} style={styles.fourX} onClick={this.handleClick}>4x</div>
                    <div id="tenX" className={this.state.activeLens === "tenX" ? "activeLens": "inactiveLens"} style={styles.tenX} onClick={this.handleClick}>10x</div>
                    <div id="fourtyX" className={this.state.activeLens === "fourtyX" ? "activeLens": "inactiveLens"} style={styles.fortyX} onClick={this.handleClick}>40x</div>
                </div>
            </React.Fragment>
        );
    }
}