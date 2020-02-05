import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../src/components/App';

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe('Greenfield Test Suite', () => {
  it('Should pass', () => {
    expect(true).toBe(true);
  });
});
