import React from 'react';
import { mount } from 'enzyme';
import Dashboard from './index';

test('Todo component renders the text of the todo', () => {
    const wrapper = mount(
      <Dashboard />
    );
    const header
    = wrapper.find('h1');
    expect(header.text()).toBe('Hi, I\'m admin app!')
});
