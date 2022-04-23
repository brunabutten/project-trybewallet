/* import PropTypes from 'prop-types'; */
/* import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; */

/* class Login extends React.Component {
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
          placeholder="password"
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

export default connect(null, mapDispatchToProps)(Login); */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../actions';

function loginVal(email, password, btnDisabled) {
  const MIN_PASSWORD_LENGTH = 5;
  const emailVal = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(email);
  const passwordVal = password.length > MIN_PASSWORD_LENGTH;
  const inputsVal = [emailVal, passwordVal];
  const valido = inputsVal.every((input) => input);
  if (valido) {
    btnDisabled(false);
  } else {
    btnDisabled(true);
  }
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => { loginVal(email, password, setIsDisabled); }, [email, password]);

  const handleClick = () => {
    dispatch(loginUser(email));
    history.push('/carteira');
  };

  return (
    <div className="container-login">
      <div className="Login">
        <h2 className="text-login">Login</h2>
        <div className="container-input-login">
          <input
            className="input-login"
            data-testid="email-input"
            type="text"
            name="email"
            value={ email }
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <input
            className="input-login"
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            placeholder="Senha"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </div>
        <button
          className="button-login"
          type="button"
          disabled={ isDisabled }
          onClick={ () => handleClick() }
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
