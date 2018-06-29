import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { EmployeesList } from './employees-list';

it('renders correctly', () => {
  const mockSetEmployees = jest.fn();
  const mockSetCursor = jest.fn();
  const mockSetCurrentPage = jest.fn();

  const wrapper = shallow(<EmployeesList
    setEmployees={mockSetEmployees}
    setCursor={mockSetCursor}
    setCurrentPage={mockSetCurrentPage}
    cursor={0}
    currentPage={1}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
