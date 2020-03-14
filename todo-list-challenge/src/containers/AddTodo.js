import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, Input, Button } from 'antd';

let AddTodo = ({ dispatch }) => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    if (!values.todo.trim()) {
      return;
    }

    dispatch(addTodo(values.todo));
    form.resetFields();
  }

  return (
    <div>
      <Form form={form} layout="inline" onFinish={handleSubmit} >
        <Form.Item style={{width: '50%'}} name="todo">
          <Input />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
              Add todo!
            </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo