/* import PropTypes from 'prop-types';
import { connect } from 'react-redux'; */

/* class Header extends Component {
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
 */

import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const { user: { email }, wallet: { expenses } } = useSelector((state) => state);

  const somaTotal = () => {
    const somaValue = expenses.map((item) => item)
      .reduce((acc, { value, exchangeRates, currency }) => acc
          + Number(value) * exchangeRates[currency].ask, 0);
    return somaValue.toFixed(2);
  };

  return (
    <header className="header">
      <div className="img-wallet">
        <p className="header-email" data-testid="email-field">{email}</p>
      </div>
      <div className="container-total-value">
        <p className="text-total-value">Despesa Total: R$ </p>
        <p
          className="header-total-value"
          data-testid="total-field"
        >
          {somaTotal()}
        </p>
        <p className="header-BRL" data-testid="header-currency-field">BRL</p>
      </div>
    </header>
  );
}

export default Header;
