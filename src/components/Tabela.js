import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Tabela extends Component {
    convert = (coin, baseCoin) => parseFloat(coin * baseCoin).toFixed(2)

    render() {
      const { expenses } = this.props;
      return (
        <table>
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
          { !expenses ? ''
            : (
              <tbody>
                {expenses.map((item) => (
                  <tr key={ item.id }>
                    <td>{item.description}</td>
                    <td>{ item.tag }</td>
                    <td>{ item.method }</td>
                    <td>{ parseFloat(item.value).toFixed(2) }</td>
                    <td>{item.rateCoinOk[item.currency].name}</td>
                    <td>
                      {
                        parseFloat(item.rateCoinOk[item.currency].ask).toFixed(2)
                      }
                    </td>
                    <td>
                      { this.convert(
                        item.value,
                        item.rateCoinOk[item.currency].ask,
                      )}
                    </td>
                    <td>Real</td>
                    <td>
                      <button
                        type="button"
                        data-testid="delete-btn"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
                ;
              </tbody>
            )}
        </table>
      );
    }
}

Tabela.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Tabela);
