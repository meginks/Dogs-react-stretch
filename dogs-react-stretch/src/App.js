import React, { Component } from 'react';
import Dog from './components/Dog';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }


  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/image/random');
  }

  getDogs = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogs: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Woof Woof!</p>
        </header>
        <div className="dog-list">
        {this.state.dogs.map((dogsFromMap, index) => (
          <Dog key={index} dog={dogsFromMap} />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
