import React from 'react';
import Dials from '../components/dials'

export default class LensView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Dials />
            </React.Fragment>
        )
    }

}