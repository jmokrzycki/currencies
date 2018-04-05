import React, { Component } from 'react';

export default class CurrenciesTable extends Component {
  getSelected(e){
    this.props.changeSelected(e.target.value, e.target.checked);
  }
  render(){
    let currencies = this.props.currencies;
    const currenciesLis = currencies.map((currency, index) =>
      <tr key={currency.code + index}>
         <td><input type="checkbox" id={currency.code + '-select'}
          value={currency.code} onChange={this.getSelected.bind(this)}/></td>
         <td><label htmlFor={currency.code + '-select'}>{currency.currency}</label></td>
      </tr>
    );

    return (
      <div className="currenciesSelectorWrapper">
        <table className="selectorTable">
          <tbody>
            {currenciesLis}
          </tbody>
        </table>
      </div>
    );
  }
}
