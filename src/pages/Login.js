import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  handleChange = (target) => {
    this.setState(() => ({
      [target.name]: target.value,
    }), () => { this.validationOk(); });
  };

  validationOk = () => {
    const emailValidation = /^[\w.]+@\w+.\w{2,}(?:.\w{2})?$/gim;
    const { email, password } = this.state;
    const PASSWORD_OK = 6;
    const loginValidation = emailValidation.test(email) && password.length >= PASSWORD_OK;

    this.setState({
      disabled: !loginValidation,
    });
  };

  handleClick = () => {
    const { userOk } = this.props;
    const { email } = this.state;
    userOk(email);
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="email"
          onChange={ ({ target }) => this.handleChange(target) }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="senha"
          onChange={ ({ target }) => this.handleChange(target) }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  userOk: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userOk: (email) => dispatch(loginUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
