import fetchNovo from '../services/fetchEco';

export const ADICMOEDA = 'ADICMOEDA';
export const DELETADESP = 'DELETADESP';
export const ADICDESP = 'ADICDESP';
export const LOGIN = 'LOGIN';

export const loginUser = (value) => ({
  type: LOGIN,
  value,
});

export const currenciesOk = (value) => ({
  type: ADICMOEDA,
  value,
});

export const adicDespesa = (value, payload) => ({
  type: ADICDESP,
  value: { ...value, rateCoin: { ...payload } },
});

export const deletaDespesa = (value) => ({
  type: DELETADESP,
  value,
});

export const coinFetch = () => async (dispatch) => {
  dispatch(currenciesOk(await fetchNovo()));
};

export const despFetch = (value) => async (dispatch) => {
  const resp = await fetchNovo();
  dispatch(adicDespesa(value, resp));
};
