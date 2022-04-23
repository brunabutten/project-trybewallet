import fetchNovo from '../services/fetchEco';

export const LOGIN = 'LOGIN';
export const ADICMOEDA = 'ADICMOEDA';
export const ADICDESP = 'ADICDESP';
export const DELETADESP = 'DELETADESP';

export const loginUser = (value) => ({
  type: LOGIN,
  value,
});

export const currenciesOk = (value) => ({
  type: ADICMOEDA,
  value,
});

export const adicDespesa = (value, data) => ({
  type: ADICDESP,
  value: { ...value, exchangeRates: { ...data } },
});

export const deletaDespesa = (value) => ({
  type: DELETADESP,
  value,
});

export const coinFetch = () => async (dispatch) => {
  dispatch(currenciesOk(await fetchNovo()));
};

export const despFetch = (value) => async (dispatch) => {
  const response = await fetchNovo();
  dispatch(adicDespesa(value, response));
};
