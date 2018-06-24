import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const EmployeeForm = () => {
  return (
    <div>
      <h1>Employee Form</h1>
      <Form>
        <FormItem label="First Name">
        </FormItem>
        <FormItem label="Last Name">
        </FormItem>
        <FormItem label="Job Title">
        </FormItem>
        <FormItem label="Salary">
        </FormItem>
        <FormItem label="Department">
        </FormItem>
      </Form>
    </div>
  );
};

export default EmployeeForm;
