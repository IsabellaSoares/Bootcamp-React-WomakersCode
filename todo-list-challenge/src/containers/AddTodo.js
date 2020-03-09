import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, Button, Row, Col, Input } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons';

function AddTodo() {

    return (
        <>
            <Row type="flex"
            style={{ alignItems: "center" }}
            justify="center">
                <Col span={12}>
                    <Form>
                        <Input type="text" name="name" placeholder="What needs to be done today?" />
                        <Button type="primary" size='medium'>
                        <PlusCircleOutlined />Primary
        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default AddTodo