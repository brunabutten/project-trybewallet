export const CURRENCIES_OK = 'CURRENCIES_OK';
export const EXPENSE_DEF = 'EXPENSE_DEF';
export const EXCHANGE_DEF = 'EXCHANGE_DEF';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  rateCoinOk: {},
};

const currencies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_OK:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSE_DEF:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case EXCHANGE_DEF:
    return {
      ...state,
      rateCoinOk: action.payload,
    };
  default: return state;
  }
};
export default currencies;
