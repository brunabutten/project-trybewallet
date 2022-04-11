import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalSum = (acc, currency) => (
      acc + (currency.value * currency.rateCoinOk[currency.currency].ask)
    );
    const final = expenses.reduce(totalSum, 0);
    return (
      <>
        <div>
          <p data-testid="email-field">
            {email}
          </p>
        </div>
        <div>
          <p data-testid="total-field">
            {final.toFixed(2)}
          </p>
        </div>
        <div>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps)(Header);
