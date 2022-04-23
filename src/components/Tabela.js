/* eslint-disable import/named */
/* import PropTypes from 'prop-types';
import { connect } from 'react-redux'; */

/* class Tabela extends Component {
    convert = (coin1, coin2) => parseFloat(coin1 * coin2).toFixed(2)

    render() {
      const { expenses } = this.props;
      return (
        <table> */

/* <td>
                    {
                      parseFloat(item.rateCoinOk[item.currency].ask).toFixed(2)
                    }
                  </td>
                  <td>
                    { this.convert(
                      item.value,
                      item.rateCoinOk[item.currency].ask,
                    )}
                  </td> */

/* Tabela.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Tabela); */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletaDespesa } from '../actions';

function Tabela() {
  const { wallet: { expenses } } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <table className="customers">
      <caption>Monthly expenses</caption>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>

      {
        !expenses ? ''
          : (
            <tbody>
              {
                expenses.map((item) => (
                  <tr key={ item.id }>
                    <td>{item.description}</td>
                    <td>{item.tag}</td>
                    <td>{item.method}</td>
                    <td>{Number(item.value).toFixed(2)}</td>
                    <td>
                      {(item.exchangeRates[item.currency].name
                        .split('/Real Brasileiro'))}
                    </td>
                    <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
                    <td>
                      {Number(item.value * item.exchangeRates[item.currency].ask)
                        .toFixed(2)}
                    </td>
                    <td>Real</td>
                    <td>
                      <button
                        className="btn-edit"
                        type="button"
                        data-testid="edit-btn"
                        name="edit"
                      >
                        Editar despesa
                      </button>
                      <button
                        className="delete-btn"
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => dispatch(deletaDespesa(item.id)) }
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>))
              }
            </tbody>
          )
      }
    </table>
  );
}

export default Tabela;
