import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '@ant-design/compatible/assets/index.css';
import { Form, Button, Row, Col, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function AddTodo ({ addTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const buttonStyle = {
        backgroundColor: '#73d13d',
        borderColor: '#73d13d',
        color: 'white',
        float: 'right'
    }

    const inputStyle = {
        width: '80%'
    }

    const onFinish = () => {
        addTodo(newTodo);
    };

    return (
        <>
            <Row type="flex"
            style={{ alignItems: "center" }}
            justify="center">
                <Col span={12}>
                    <Form onFinish={onFinish}>
                        <Form.Item>
                            <Input 
                                placeholder="What needs to be done today?"
                                style={inputStyle}
                                onChange={e => setNewTodo(e.target.value)} />
                            <Button size="medium" htmlType="submit" style={buttonStyle}>
                                <PlusOutlined />Add todo
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default AddTodo