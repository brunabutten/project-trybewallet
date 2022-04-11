import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expenseCreate, fetchCoin } from '../actions';

class FormExpenses extends Component {
  state = {
    value: '',
    /* value: 0, */
    description: '',
    currency: 'USD',
    methodOk: '',
    tagOk: '',
  };

  /*   handleChange = (target) => {
    this.setState({
      [target.id]: target.value,
    });
  }; */

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleClick = async () => {
    const {
      expenses,
      expenseDispatch,
      rateCoinOk,
      coinDispatch,
    } = this.props;
    await coinDispatch();
    const { value, description, currency, methodOk, tagOk } = this.state;
    expenseDispatch({
      id: expenses.length,
      value,
      description,
      currency,
      method: methodOk,
      tag: tagOk,
      rateCoinOk,
    });
    this.setState({
      value: '',
      /* value: 0, */
      description: '',
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            name="value"
            data-testid="value-input"
            value={ value }
            /* onChange={ ({ target }) => this.handleChange(target) } */
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição dos gastos:
          <input
            id="description"
            name="description"
            type="text"
            value={ description }
            data-testid="description-input"
            /* onChange={ ({ target }) => this.handleChange(target) } */
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            data-testid="currency-input"
            /* onChange={ ({ target }) => this.handleChange(target) } */
            onChange={ this.handleChange }
          >
            {currencies && currencies.map((currency, index) => (
              <option key={ index } value={ currency }>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="methodOk">
          Método de Pagamento:
          <select
            id="methodOk"
            name="methodOk"
            data-testid="method-input"
            /* onChange={ ({ target }) => this.handleChange(target) } */
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="tagOk">
          Categoria:
          <select
            id="tagOk"
            data-testid="tag-input"
            name="tagOk"
            /* onChange={ ({ target }) => this.handleChange(target) } */
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Trasporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

FormExpenses.propTypes = {
  currencies: PropTypes.arrayOf().isRequired,
  rateCoinOk: PropTypes.shape({}).isRequired,
  expenseDispatch: PropTypes.func.isRequired,
  coinDispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  rateCoinOk: state.wallet.rateCoinOk,
});

const mapDispatchToProps = (dispatch) => ({
  expenseDispatch: (expenses) => dispatch(expenseCreate(expenses)),
  coinDispatch: () => dispatch(fetchCoin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
