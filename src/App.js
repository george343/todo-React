import React, { Component } from 'react';
import './App.css';
import Column from './Column'
import NewTaskButton from './NewTaskButton';
import { faCheck, faCogs, faSadCry, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  state = {
    todo: ["sd"],
    doing: [],
    done: []
  }

  addToDo = (task) => {
    this.setState({todo: this.state.todo.concat(task)})
  }

  handleIconsClick = (icon, returnedTask) =>  {
    switch (icon.iconName) {
      case "sad-cry":
        this.setState({
          todo: this.state.todo.filter(task => task !== returnedTask)
        })
        this.setState({doing: this.state.doing.concat(returnedTask)})
        break;
      case "check":
        this.setState({
          doing: this.state.doing.filter(task => task !== returnedTask)
        })
        this.setState({done: this.state.done.concat(returnedTask)})
        break;
      case "cogs":
        this.setState({
          doing: this.state.doing.filter(task => task !== returnedTask)
        })
        this.setState({todo: this.state.todo.concat(returnedTask)})
        break;
      case "trash-alt":
        this.setState({
          doing: this.state.doing.filter(task => task !== returnedTask),
          todo: this.state.todo.filter(task => task !== returnedTask)
        })
        break;
      default:
        break
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header"><h1>ToDo List</h1></header>
        <Column 
          title='To Do' 
          ls={this.state.todo} 
          icon1={faSadCry}
          icon3={faTrashAlt} 
          fun={this.handleIconsClick} />
        <Column 
          title='Doing' 
          ls={this.state.doing} 
          icon1={faCheck} 
          icon2={faCogs}
          icon3={faTrashAlt} 
          fun={this.handleIconsClick} />
        <Column 
          title='Done' 
          ls={this.state.done} />
        <NewTaskButton 
          parentCallBack={this.addToDo} />
        </div>
    );
  }
}

export default App;
