import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Filter } from './filter';

it('renders correctly', () => {
  const mockSetFilter = jest.fn();
  const mockSetCursor = jest.fn();
  const mockSetCurrentPage = jest.fn();

  const wrapper = shallow(<Filter
    setFilter={mockSetFilter}
    setCursor={mockSetCursor}
    setCurrentPage={mockSetCurrentPage}
    filter={''}
    departments={[]}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
