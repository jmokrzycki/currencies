import React, { Component } from 'react';
import CurrenciesTable from './components/CurrenciesTable.js';
import CurrenciesSelector from './components/CurrenciesSelector.js';
import Header from './components/Header.js';
import './styles/App.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      selected: []
    }
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(currencyCode, isChecked) {
    let selected = this.state.selected;
    if(isChecked){
      let updateSelected = selected.slice();
      updateSelected.push(currencyCode);
      this.setState({selected: updateSelected});
    } else {
      let filtered = selected.filter(currency => currency !== currencyCode);
      this.setState({selected: filtered});
    }
  }

  clearSelected() {
      this.setState({selected: []});
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
        <Header/>
        <div className="content-wrapper">
        <CurrenciesTable currencies={this.state.currencies} selected={this.state.selected}/>
        <CurrenciesSelector currencies={this.state.currencies}
          changeSelected={this.changeSelected.bind(this)} clearSelected={this.clearSelected.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
