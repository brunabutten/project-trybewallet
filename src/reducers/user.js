/* export const USER_LOGIN = 'USER_LOGIN'; */
/* const user = (state = INITIAL_STATE, action) => { */

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.value,
    };
  default:
    return state;
  }
}

export default user;
