/*eslint-disable*/
import authReducer from './authReducer';
import * as actionTypes from '../actions/authActions';

const initialState = {
  loading: false,
  email: '',
  name: '',
  jwt: '',
  error: '',
};

const user = {
  email: 'test@test.com',
  name: 'Shiva Charan',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhMDA3Y2hhcmFuQGdtYWlsLmNvbSIsIm5hbWUiOiJTaGl2YSBDaGFyYW4iLCJpYXQiOjE1MTYyMzkwMjJ9.as7zAWlga4AewWL0YJTJvTifOlovDQuNMY1Qc6m27n0',
};

const error = 'Sorry! Something went wrong.';

describe('authReducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should return start loading', () => {
    expect(authReducer(initialState, {
      type: actionTypes.LOAD_START
    }))
      .toEqual({
        loading: true,
        email: '',
        name: '',
        jwt: '',
        error: '',
      });
  });

  it('should return end loading', () => {
    expect(authReducer(initialState, {
      type: actionTypes.LOAD_END
    }))
      .toEqual({
        loading: false,
        email: '',
        name: '',
        jwt: '',
        error: '',
      });
  });

  it('should authenticate', () => {
    expect(authReducer(initialState, {
      type: actionTypes.LOGIN,
      result: user
    }))
      .toEqual({
        loading: false,
        email: user.email,
        name: user.name,
        jwt: user.jwt,
        error: '',
      });
  });

  it('should throw error', () => {
    expect(authReducer(initialState, {
      type: actionTypes.ERROR,
      result: error
    }))
      .toEqual({
        loading: false,
        email: '',
        name: '',
        jwt: '',
        error,
      });
  });
});
