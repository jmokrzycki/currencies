import React, { Component } from 'react';
import CurrenciesTable from './Components/CurrenciesTable.js';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    }
  }

  componentDidMount() {
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
    .then(results => {
      return results.json();
    }).then(data => {
      const rates = data.reduce( (rates, rate) => rates = rate.rates, [] );
      this.setState({currencies: rates});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>


        <CurrenciesTable currencies={this.state.currencies} />
      </div>
    );
  }
}

export default App;
