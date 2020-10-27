import React, { Component } from 'react'
import Popup from 'reactjs-popup';

export default class NewTaskButton extends Component {
    state = {
        task: '',
    }
    handleChange = this.handleChange.bind(this)
    handleSubmit = this.handleSubmit.bind(this)

    handleChange(e) {
        this.setState({task: e.target.value})
    }

    handleSubmit(e) {
        this.props.parentCallBack(this.state.task)
        this.setState({task: ''})
    }

    render() {
        return (
            <Popup trigger={<button>New Task</button>} modal nested >
                {close => (
                    <div className='new-task-button'>
                        <h2>New Task</h2>
                        <hr />
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.handleChange} value={this.state.task} placeholder="Enter new Task"/>
                            <br />
                            <button id="but" type="submit" onClick={() => {
                                this.handleSubmit();
                                console.log('modal closed ');
                                close();
                                }} close modal>Add Task</button>
                        </form>
                    </div>
                )}
            </Popup>
        )
    }
}