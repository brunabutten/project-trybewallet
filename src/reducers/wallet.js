/* export const CURRENCIES_OK = 'CURRENCIES_OK';
export const EXPENSE_DEF = 'EXPENSE_DEF';
export const EXCHANGE_DEF = 'EXCHANGE_DEF'; */
import {
  ADICMOEDA,
  ADICDESP,
  DELETADESP,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  /* rateCoinOk: {}, */
};

/* const currencies = (state = INITIAL_STATE, action) => { */
function wallet(state = INITIAL_STATE, { type, value }) {
  switch (type) {
  case ADICMOEDA:
    return {
      ...state,
      currencies: Object.entries(value)
        .map((item) => item[0])
        .filter((item) => item !== 'USDT'),
    };
  case ADICDESP:
    return {
      ...state,
      expenses: [...state.expenses, value],
    };
  case DELETADESP:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== value),
    };
  default: return state;
  }
}
export default wallet;
