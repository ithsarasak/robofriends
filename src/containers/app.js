import React, { Component } from 'react';
import CardList from '../components/cardlist';
import InputBox from '../components/inputbox';
import Scroll from '../components/scroll';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
      addfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  onAddChange = (event) => {
    this.setState({ addfield: event.target.value });
  }


  onClick = (event) => {
    let { robots, addfield } = this.state;
    addfield = addfield.trim();
    if (!addfield.length) return ; 
    const toAdd = {
      id: robots.length + 1,
      name: addfield,
      username: addfield,
      email: addfield + "@gmail.com"
    }
    this.setState({ robots: [...robots, toAdd] });
  }

  render () {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1 className='tc'>Loading</h1> : 
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <InputBox type={`search`} placeholder={`search`} onChange={this.onSearchChange} />
        <InputBox type={`text`} placeholder={`add`} onChange={this.onAddChange} />
        <button onClick={this.onClick}>Add</button>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
  }
}

export default App;
