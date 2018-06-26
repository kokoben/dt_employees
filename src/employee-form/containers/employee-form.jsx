import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { addEmployee } from '../actions';

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

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 18,
      offset: 6,
    },
  },
};

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;
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
            {getFieldDecorator('firstName', {
              rules: [{
                type: 'regexp',
                required: true,
                whitespace: true,
                pattern: /^[a-z]+$/i,
                message: 'Must contain only letters and no spaces.',
              }],
            })(<Input />)}
          </FormItem>
          <FormItem
            label="Last Name"
            {...formItemLayout}
          >
            {getFieldDecorator('lastName', {
              rules: [{
                type: 'regexp',
                required: true,
                whitespace: true,
                pattern: /^[a-z]+$/i,
                message: 'Must contain only letters and no spaces.',
              }],
            })(<Input />)}
          </FormItem>
          <FormItem
            label="Job Title"
            {...formItemLayout}
          >
            {getFieldDecorator('jobTitle', {
              rules: [{
                type: 'regexp',
                required: true,
                whitespace: true,
                pattern: /^[a-z]+$/i,
                message: 'Must contain only letters and no spaces.',
              }],
            })(<Input />)}
          </FormItem>
          <FormItem
            label="Salary"
            {...formItemLayout}
          >
            {getFieldDecorator('salary', {
              rules: [{
                type: 'regexp',
                required: true,
                whitespace: true,
                pattern: /^[0-9]+(\.[0-9][0-9])?$/,
                message: 'Must contain only letters and no spaces.',
              }],
            })(<Input prefix="$" />)}
          </FormItem>
          <FormItem
            label="Department"
            {...formItemLayout}
          >
            {getFieldDecorator('department', {
              rules: [{
                type: 'regexp',
                required: true,
                whitespace: true,
                pattern: /^[a-z]+$/i,
                message: 'Must contain only letters and no spaces.',
              }],
            })(<Input />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button tabIndex="0" style={{ float: 'left' }}type="primary" htmlType="submit">Add</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addEmployee,
  }, dispatch)
);

export default Form.create()(EmployeeForm);
