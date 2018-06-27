import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { addEmployee, addEmployeeFirstName, updateFields } from '../actions';

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

const EmployeeForm = Form.create({
  onFieldsChange(props, changedFields) {
    console.log('onFieldsChange', changedFields);
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      firstName: Form.createFormField(props.firstName),
      lastName: Form.createFormField(props.lastName),
      jobTitle: Form.createFormField(props.jobTitle),
      salary: Form.createFormField(props.salary),
      department: Form.createFormField(props.department),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
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
  );
});

class WrappedEmployeeForm extends Component {
  render() {
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
        <EmployeeForm
          onChange={this.props.updateFields}
        />
      </div>
    );
  }
}

WrappedEmployeeForm.propTypes = {
  updateFields: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateFields,
    addEmployee,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedEmployeeForm);

