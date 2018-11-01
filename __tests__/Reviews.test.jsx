import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';

describe('App Component Unit Tests', () => {
  test('it has the correct initialized state prior to componentDidMount', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state(['reviews'])).toEqual([]);
  });
});
