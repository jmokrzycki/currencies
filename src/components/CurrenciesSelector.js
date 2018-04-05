import React, { Component } from 'react';

export default class CurrenciesTable extends Component {
  getSelected(e){
    this.props.changeSelected(e.target.value, e.target.checked);
  }
  clearSelected(){
    this.props.clearSelected();
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
      <div className="currencies-selector-wrapper">
        <button id="aaa" className="btn btn-dark btn-clear-currencies" onClick={this.clearSelected.bind(this)}>Clear all</button>
        <div className="selected-currencies-list">
          <table className="selector-table table table-dark table-hover">
            <tbody>
              {currenciesLis}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
