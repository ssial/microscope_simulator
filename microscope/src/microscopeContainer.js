import React from 'react';
import specimen from "./imgs/thumbnail_Scale_4X.jpg";

export default class MicroscopeContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ width: "800px", height: "600px", border: "solid black 1px" }}><img src={specimen} style={{width:"60%",position:"relative", top:108}} alt="Comb under microscope at 4x"/></div>
        );
    }
}

