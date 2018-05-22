import http from '../http';
import * as loginActions from '../actions/loginActions';

export const authService = (email, password) => (dispatch) => {
  dispatch(loginActions.loadStart());
  return http.Service.post('/post', {})
    .then((response) => {
      if (email === 'test@test.com' && password === 'demo') {
        const user = {
          email: 'test@test.com',
          name: 'Shiva Charan',
          jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhMDA3Y2hhcmFuQGdtYWlsLmNvbSIsIm5hbWUiOiJTaGl2YSBDaGFyYW4iLCJpYXQiOjE1MTYyMzkwMjJ9.as7zAWlga4AewWL0YJTJvTifOlovDQuNMY1Qc6m27n0',
        };
        http.setToken(user.jwt);
        dispatch(loginActions.loginAction(user));
      } else {
        dispatch(loginActions.throwError('Invalid Email or Password!'));
      }
      dispatch(loginActions.loadEnd());
    })
    .catch((error) => {
      dispatch(loginActions.throwError('Sorry! Something went wrong.'));
      dispatch(loginActions.loadEnd());
    });
};
