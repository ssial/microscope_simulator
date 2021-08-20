import React from 'react';
import comb from "../imgs/thumbnail_Scale_4X.jpg";
import sunflower from "../imgs/sunflower_stem.jpg";
import corn from "../imgs/corn_stem.jpg";
import onion from "../imgs/onion_root.jpeg"

let styles = {
    outerCircle: {
        width: 720, height: 720, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", border: "solid #111111 5px", boxSizing: "border-box"
    },
    innerCircle: {
        width: 715, height: 715, backgroundColor: "white", borderRadius: "50%", transform: "translate(-2.5px,-2.5px)", border: "solid #979797 3px",boxSizing: "border-box", overflow: "hidden"
    }
}

export default class ViewCircle extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <React.Fragment>
                <div style={styles.outerCircle}>
                    <div style={styles.innerCircle}>
                    <img style={{margin:"-20% -100%",maxHeight:"100vh",transform:`translateY(${this.props.yOffset}%) translateX(${this.props.xOffset}%) scale(${this.props.scale})`, filter:`blur(${this.props.blur}em)`}} src={this.props.activeSpecimen === "sunflower" ? sunflower : this.props.activeSpecimen === "corn" ? corn : onion}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}