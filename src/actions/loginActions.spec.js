/*eslint-disable*/
import * as actionTypes from './authActions';
import * as loginActions from './loginActions';

const user = {
  email: 'test@test.com',
  name: 'Shiva Charan',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhMDA3Y2hhcmFuQGdtYWlsLmNvbSIsIm5hbWUiOiJTaGl2YSBDaGFyYW4iLCJpYXQiOjE1MTYyMzkwMjJ9.as7zAWlga4AewWL0YJTJvTifOlovDQuNMY1Qc6m27n0',
};

const error = 'Sorry! Something went wrong.';

describe('loginActions', () => {
  it('should login', () => {
    const expectedAction = {
      type: actionTypes.LOGIN,
      result: user,
    };
    expect(loginActions.loginAction(user))
      .toEqual(expectedAction);
  });

  it('should start loading', () => {
    const expectedAction = {
      type: actionTypes.LOAD_START,
    };
    expect(loginActions.loadStart())
      .toEqual(expectedAction);
  });

  it('should end loading', () => {
    const expectedAction = {
      type: actionTypes.LOAD_END,
    };
    expect(loginActions.loadEnd())
      .toEqual(expectedAction);
  });

  it('should throw error', () => {
    const expectedAction = {
      type: actionTypes.ERROR,
      result: error
    };
    expect(loginActions.throwError(error))
      .toEqual(expectedAction);
  });
});
