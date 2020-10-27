import React, { Component } from 'react'
import Card from './Card'

export default class Column extends Component {
    state = {
        task: ''
    }

    render() {
        return(
            <div className="columns">
                <h2>{this.props.title}</h2>
                {this.props.ls.map((task, index) => {
                    return <Card key={index} 
                                content={task} 
                                icon1={this.props.icon1}
                                icon2={this.props.icon2}
                                icon3={this.props.icon3}
                                fun={this.props.fun} />
                })}
            </div>
        )
    }
}