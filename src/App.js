import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  
  state = {
    peopleInSpace: []
  }
  
  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
      )
  }
  
  componentDidMount() {
    fetch( http://api.open-notify.org/astros.json)
    .then
  }
  
  
}