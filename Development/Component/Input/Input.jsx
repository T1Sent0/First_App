import React from 'react';
import './Input.scss'

export default class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <input className={this.props.className} type={this.props.type} name={this.props.name} value={this.props.value}/>
        )
    }
}