import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Row, Col, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function AddTodo() {

    const buttonStyle = {
        backgroundColor: '#73d13d',
        borderColor: '#73d13d',
        color: 'white',
        float: 'right'
    }

    const inputStyle = {
        width: '80%'
    }

    return (
        <>
            <Row type="flex"
            style={{ alignItems: "center" }}
            justify="center">
                <Col span={12}>
                    <Form layout="inline">
                        <Input type="text" name="name" placeholder="What needs to be done today?" style={inputStyle} />
                        <Button size='medium' style={buttonStyle}>
                            <PlusOutlined />Add todo
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default AddTodo