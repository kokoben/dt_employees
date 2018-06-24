import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const EmployeeForm = () => {
  return (
    <div style={{width: '50%' }}>
      <h1>Employee Form</h1>
      <Form>
        <FormItem
          label="First Name"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Last Name"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Job Title"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Salary"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Department"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
      </Form>
    </div>
  );
};

export default EmployeeForm;
