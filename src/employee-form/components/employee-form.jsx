import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const EmployeeForm = () => {
  return (
    <div style={{ width: '50%' }}>
      <Link to="/">
        <Button
          style={{ float: 'left', margin: '10px' }}
          size="small"
          type="primary"
          icon="left"
        >
          Back
        </Button>
      </Link>
      <h1 style={{ clear: 'left' }}>Add Employee</h1>
      <Form style={{ marginLeft: '10px' }}>
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
