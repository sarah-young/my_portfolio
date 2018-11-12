import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

import { findByTestAttr } from '../test/testUtils';

const setup = ( state={} ) => {
  const wrapper = shallow(<Login />);
  return wrapper;
}

test('Picture displays', () => {
  const wrapper = setup();
  const picture = findByTestAttr(wrapper, 'picture');
  expect(picture.length).toBe(1);
});
