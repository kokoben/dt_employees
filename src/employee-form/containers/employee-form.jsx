import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { addEmployee, updateFields } from '../actions';
import { setTab } from '../../app/actions';

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
})((props) => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('values: ', values);
        props.onGoodSubmit(values);
      }
    });
  };

  return (
    <Form
      style={{ marginLeft: '10px' }}
      onSubmit={handleSubmit}
    >
      <FormItem
        label="First Name"
        {...formItemLayout}
      >
        {getFieldDecorator('firstName', {
          rules: [
            { required: true, message: 'Please enter employee\'s first name.', whitespace: true },
            { pattern: /^[a-z ]+$/i, message: 'May only contain letters.' },
          ],
        })(<Input />)}
      </FormItem>
      <FormItem
        label="Last Name"
        {...formItemLayout}
      >
        {getFieldDecorator('lastName', {
          rules: [
             { required: true, message: 'Please enter employee\'s last name.', whitespace: true },
             { pattern: /^[a-z]+$/i, message: 'May only contain letters and no spaces.' },
          ],
        })(<Input />)}
      </FormItem>
      <FormItem
        label="Job Title"
        {...formItemLayout}
      >
        {getFieldDecorator('jobTitle', {
          rules: [
             { required: true, message: 'Please enter employee\'s job title.' },
             { pattern: /^[\w ]+$/g, message: 'May only contain alphanumeric characters.' },
          ],
        })(<Input />)}
      </FormItem>
      <FormItem
        label="Salary"
        {...formItemLayout}
      >
        {getFieldDecorator('salary', {
          rules: [
          { required: true, message: 'Please enter employee\'s salary.', whitespace: true },
          {
            pattern: /^[0-9]+(\.[0-9][0-9])?$/,
            message: 'Invalid amount. Must in the format: (dollar amount).(cents) Example: 19899.52',
          },
          ],
        })(<Input prefix="$" />)}
      </FormItem>
      <FormItem
        label="Department"
        {...formItemLayout}
      >
        {getFieldDecorator('department', {
          rules: [
             { required: true, message: 'Please enter employee\'s department.', whitespace: true },
             { pattern: /^[a-z]+$/i, message: 'Must contain only letters and no spaces' },
          ],
        })(<Input />)}
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button tabIndex="0" style={{ float: 'left' }} type="primary" htmlType="submit">Add</Button>
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
            onClick={() => this.props.setTab('/')}
            size="small"
            type="primary"
            icon="left"
          >
            Back
          </Button>
        </Link>
        <h1 style={{ clear: 'left' }}>Add Employee</h1>
        <EmployeeForm
          {...this.props.fields}
          onChange={this.props.updateFields}
          onGoodSubmit={this.props.addEmployee}
        />
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
WrappedEmployeeForm.propTypes = {
  addEmployee: PropTypes.func.isRequired,
  updateFields: PropTypes.func.isRequired,
  setTab: PropTypes.func.isRequired,
  fields: PropTypes.object,
};
/* eslint-enable */


const mapStateToProps = state => ({
  fields: state.form.fields,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateFields,
    addEmployee,
    setTab,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedEmployeeForm);

