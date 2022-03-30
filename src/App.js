import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count : this.state.count + 1})
  }

  decrement = () => {
    this.setState({ count : this.state.count - 1})
  }

  render() {
    return (
    <div className="App">
      <button type="button" class="btn btn-danger" id="result">{this.state.count}</button>
      <button type="button" onClick={this.increment} class="btn btn-primary"id="increment">Incrémenter</button>
      <button type="button" onClick={this.decrement} class="btn btn-success"id="decrement">Décrémenter</button>
    </div>
    );
  }
}

export default App;
