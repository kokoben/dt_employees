import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { WrappedEmployeeForm } from './employee-form';

it('renders correctly', () => {
  const mockUpdateFields = jest.fn();
  const mockAddEmployee = jest.fn();
  const mockSetCurrentPage = jest.fn();
  const mockSetCursor = jest.fn();

  const wrapper = shallow(<WrappedEmployeeForm
      addEmployee={mockAddEmployee}
      updateFields={mockUpdateFields}
      fields = {{}}
      setCurrentPage={mockSetCurrentPage}
      setCursor={mockSetCursor}
  />);

      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
});
