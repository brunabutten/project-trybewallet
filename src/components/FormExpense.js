/* import PropTypes from 'prop-types'; */
/* import { connect } from 'react-redux'; */

/* class FormExpenses extends Component {
  state = { */

/*   handleChange = (target) => {
    this.setState({
      [target.id]: target.value,
    });
  }; */

/* handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }; */

/* handleClick = async () => {
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
      description: '',
    });
  }; */

/*   render() {
    const { currencies } = this.props;
    const { value, description } = this.state; */

/* FormExpenses.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses); */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coinFetch, despFetch } from '../actions/index';

function FormExpense() {
  const stateComponent = {
    value: '',
    description: '',
    currency: 'USD',
    method: '',
    tag: '',
  };

  const dispatch = useDispatch();

  useEffect(() => { dispatch(coinFetch()); }, [dispatch]);

  const [infoOne, infoTwo] = useState(stateComponent);

  const { wallet: { currencies, expenses } } = useSelector((state) => state);

  const handleChange = (event) => {
    const { name, value } = event.target;
    infoTwo((itemPrev) => ({ ...itemPrev, [name]: value }));
  };

  const handleClick = () => {
    dispatch(despFetch({ ...infoOne, id: expenses.length }));
    infoTwo(stateComponent);
  };

  return (
    <div className="container-form-add">
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            className="input-value"
            id="value-input"
            type="text"
            name="value"
            value={ infoOne.value }
            placeholder="Valor"
            data-testid="value-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            className="input-description"
            id="description-input"
            type="text"
            name="description"
            value={ infoOne.description }
            placeholder="Descrição"
            data-testid="description-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="currency-select">
          Moeda:
          <select
            className="select-currency"
            id="currency-select"
            name="currency"
            value={ infoOne.currency }
            onChange={ handleChange }
          >
            {currencies.map((itemTwo) => (
              <option key={ itemTwo }>{itemTwo}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
            className="select-method"
            id="method-input"
            name="method"
            value={ infoOne.method }
            data-testid="method-input"
            onChange={ handleChange }
          >
            <option>Selecione</option>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select
            className="select-tag"
            id="tag-input"
            name="tag"
            value={ infoOne.tag }
            data-testid="tag-input"
            onChange={ handleChange }
          >
            <option>Selecione</option>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          className="button-add"
          type="button"
          onClick={ handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    </div>
  );
}

export default FormExpense;
