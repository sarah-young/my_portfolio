import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

import { findByTestAttr } from '../test/testUtils';

const setup = ( state={} ) => {
  const wrapper = shallow(<Login />);
  return wrapper;
}

test('component renders without error', () => {
  const wrapper = setup();
  const loginContainer = findByTestAttr(wrapper, 'login-container');
  expect(loginContainer.length).toBe(1);
  });

test('component has login form', () => {
  const wrapper = setup();
  const loginForm = findByTestAttr(wrapper, 'login-form');
  expect(loginForm.length).toBe(1);
});

test('component has username input', () => {
  const wrapper = setup();
  const usernameInput = findByTestAttr(wrapper, 'username-input');
  expect(usernameInput.length).toBe(1);
});

test('component has username input', () => {
  const wrapper = setup();
  const passwordInput = findByTestAttr(wrapper, 'password-input');
  expect(passwordInput.length).toBe(1);
});

test('component has login button', () => {
  const wrapper = setup();
  const loginButton = findByTestAttr(wrapper, 'login-button');
  expect(loginButton.length).toBe(1);
});


test('component has `register` div', () => {
  const wrapper = setup();
  const registerDiv = findByTestAttr(wrapper, 'register-div');
  expect(registerDiv.length).toBe(1);
});

test('`register` div contains correct text', () => {
  const wrapper = setup();
  const registerDiv = findByTestAttr(wrapper, 'register-div');
  expect(registerDiv.text()).toContain('Need a login? Register here.');
});
