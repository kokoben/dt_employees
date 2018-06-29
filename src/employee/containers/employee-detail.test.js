import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { EmployeeDetail } from './employee-detail';

it('renders correctly', () => {
  const mockSetEmployee = jest.fn();
  const mockSetCurrentPage = jest.fn();
  const mockSetCursor = jest.fn();

  const wrapper = shallow(<EmployeeDetail
    match={{ params: {id: 2} }}
    cursor={0}
    employee={{
      department: 'POLICE',
      employee_annual_salary: '84450.00',
      job_titles: 'POLICE OFFICER',
      id: 2,
      name: 'AARON, JEFFERY M',
    }}
    currentPage={1}
    filteredEmployees={[{
      department: 'POLICE',
      employee_annual_salary: '84450.00',
      job_titles: 'POLICE OFFICER',
      id: 2,
      name: 'AARON, JEFFERY M',
    }]}
    setEmployee={mockSetEmployee}
    setCursor={mockSetCursor}
    setCurrentPage={mockSetCurrentPage}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
