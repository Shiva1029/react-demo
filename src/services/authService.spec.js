/*eslint-disable*/
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import http from  '../http';
import moxios from 'moxios';
import * as loginActions from '../actions/loginActions';
import * as authService from './authService';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
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

describe('authService', () => {

  beforeEach(function () {
    moxios.install(http.Service);
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('Authenticates Succesfully', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {},
      });
    });

    const expectedActions = [
      loginActions.loadStart(),
      loginActions.loginAction(user),
      loginActions.loadEnd()
    ];

    const store = mockStore(initialState);

    return store.dispatch(authService.authService(user.email, 'demo')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Authentication Fails', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: {},
      });
    });

    const expectedActions = [
      loginActions.loadStart(),
      loginActions.throwError(error),
      loginActions.loadEnd()
    ];

    const store = mockStore(initialState);

    return store.dispatch(authService.authService(user.email, 'demo')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
