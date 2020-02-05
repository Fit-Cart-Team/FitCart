import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../src/components/App';

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1').exists()).toBe(true);
  });
});
