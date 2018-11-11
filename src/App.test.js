import React, { Component } from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { findByTestAttr } from './test/testUtils';

const setup = ( state={} ) => {
  const wrapper = shallow(<App />);
  return wrapper;
}

test('component renders without error', () => {
  const wrapper = setup();
  const appContainer = findByTestAttr(wrapper, 'app-container');
  expect(appContainer.length).toBe(1);
  });

test('login component rendered', () => {
  const wrapper = setup();
  const loginComponent = findByTestAttr(wrapper, 'login-component');
  expect(loginComponent.length).toBe(1);
});
