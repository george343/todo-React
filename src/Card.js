import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends Component {
    state = {}

    render() {
        return (
            <h4 className="card">{this.props.content}
                <FontAwesomeIcon 
                    icon={this.props.icon1} 
                    className="icon"
                    onClick={() => this.props.fun(this.props.icon1, this.props.content)} />
                <FontAwesomeIcon 
                    icon={this.props.icon2} 
                    className="icon"
                    onClick={() => this.props.fun(this.props.icon2, this.props.content)} />
                <FontAwesomeIcon 
                    icon={this.props.icon3}
                    className="icon"
                    onClick={() => this.props.fun(this.props.icon3, this.props.content)} />
            </h4>
            // How to return the click?
        )
    }
}

export default Card