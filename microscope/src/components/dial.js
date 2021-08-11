import React from 'react';
import {gsap} from "gsap";
import {Draggable} from "gsap/all";

gsap.registerPlugin(Draggable);

export default class Dial extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Draggable.create(".draggable", {
            type: "rotation",
            onPress: function() {
              console.log("clicked");
            }
          });
    }

    render() {
        return(
            <div className="draggable" style={{width:200,height:40,border:"solid black 1px"}}></div>
        );
    }
}