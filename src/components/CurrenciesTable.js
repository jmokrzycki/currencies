import React, { Component } from 'react';

export default class CurrenciesTable extends Component {
  render(){
    let currencies = this.props.currencies;
    let selected = this.props.selected;

    let filteredCurrencies = currencies.filter(currency => selected.includes(currency.code));

    const currenciesMap = filteredCurrencies.map((currency, index) =>
      <tr key={currency.code + index}>
       <td>{currency.currency}</td>
       <td>{currency.code}</td>
       <td>{currency.mid}</td>
      </tr>
    );

    return (
      <div className="currenciesWrapper">
        <table key="" className="currenciesTable">
          <thead>
            <tr>
              <th className="currency">Currency</th>
              <th className="code">Code</th>
              <th className="mid">Mid</th>
            </tr>
          </thead>
          <tbody>
            {currenciesMap}
          </tbody>
        </table>
      </div>
    );
  }
}
