import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCoin } from '../actions/index';
import FormExpenses from '../components/FormExpenses';
import Tabela from '../components/Tabela';

class Wallet extends React.Component {
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
