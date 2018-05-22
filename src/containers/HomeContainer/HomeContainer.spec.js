/*eslint-disable*/
import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import HomeContainer from './HomeContainer';

const initialState = {
  auth: {
    name: 'Shiva Charan'
  }
};

const mockStore = configureStore();
let dom;
let store;

describe('Home Container', () => {

  beforeEach(() => {
    store = mockStore(initialState);
    dom = mount(<HomeContainer store={store}/>);
  });

  it('should render the home container to the dom', () => {
    expect(dom.find('div.homeContainer').length)
      .toBe(1);
  });

  it('should render the name of the logged in user', () => {
    expect(dom.find('h2')
      .text())
      .toEqual('Welcome Shiva Charan');
  });
});
