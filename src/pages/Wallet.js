/* import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions';
import FormExpenses from '../components/FormExpenses';
import Tabela from '../components/Tabela'; */

/* class Wallet extends React.Component {
  componentDidMount = async () => {
    const { coinDispatch } = this.props;
    coinDispatch();
  }

  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
        <Tabela />
      </div>
    );
  }
}

Wallet.propTypes = {
  coinDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  coinDispatch: () => dispatch(fetchCoin()),
});

export default connect(null, mapDispatchToProps)(Wallet);
 */

import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
import Tabela from '../components/Tabela';

function Wallet() {
  return (
    <div className="container-geral-wallet">
      <Header />
      <FormExpense />
      <Tabela />
    </div>);
}

export default Wallet;
