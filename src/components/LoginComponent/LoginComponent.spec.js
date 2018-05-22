/*eslint-disable*/
import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import LoginComponent from './LoginComponent';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';

const initialState = {
  auth: {
    loading: false,
    error: '',
  }
};

const loadingState = {
  auth: {
    loading: true,
    error: '',
  }
};

const errorState = {
  auth: {
    loading: false,
    error: 'Sorry! Something went wrong.',
  }
};

const mockStore = configureStore();
let dom;
let store;

describe('Login Component', () => {
  it('should render the login component to the dom', () => {
    store = mockStore(initialState);
    dom = mount(<LoginComponent store={store}/>);
    expect(dom.find('input').length)
      .toBe(2);
  });

  it('should render the spinner when loading', () => {
    store = mockStore(loadingState);
    dom = mount(<LoginComponent store={store}/>);
    expect(dom.find(SpinnerComponent).length)
      .toBe(1);
  });

  it('should render error message', () => {
    store = mockStore(errorState);
    dom = mount(<LoginComponent store={store}/>);
    expect(dom.find('div.errorMessage')
      .text())
      .toEqual('* Sorry! Something went wrong.');
  });
});
