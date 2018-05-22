import * as actionTypes from '../actions/authActions';

const initialState = {
  loading: false,
  email: '',
  name: '',
  jwt: '',
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case actionTypes.LOAD_END:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        email: action.result.email,
        name: action.result.name,
        jwt: action.result.jwt,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.result,
      };
    default:
      return state;
  }
};

export default reducer;
