/* export const USER_LOGIN = 'USER_LOGIN'; */

const INITIAL_STATE = {
  email: '',
};

/* const user = (state = INITIAL_STATE, action) => { */
function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      ...state,
      email: action.value,
    };
  default:
    return state;
  }
}

export default user;
