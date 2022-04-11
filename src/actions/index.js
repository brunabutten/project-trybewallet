import { USER_LOGIN } from '../reducers/user';
import { CURRENCIES_OK, EXCHANGE_DEF, EXPENSE_DEF } from '../reducers/wallet';

export const loginUser = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const currenciesOk = (currenciesArr) => ({
  type: CURRENCIES_OK,
  payload: currenciesArr,
});

export const coinCreate = (rateCoinOk) => ({
  type: EXCHANGE_DEF,
  /*   payload: rateCoin, */
  payload: rateCoinOk,
});

export function fetchCoin() {
  return async (dispatch) => {
    dispatch(currenciesOk());
    const fetchCoi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchCoi.json();
    const filterTwo = Object.keys(response).filter((item) => item !== 'USDT');
    console.log(filterTwo);
    dispatch(currenciesOk(filterTwo));
    dispatch(coinCreate(response));
  };
}

export const expenseCreate = (expenses) => ({
  type: EXPENSE_DEF,
  payload: expenses,
});
