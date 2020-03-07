import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, Button, Row, Col } from 'antd'

function AddTodo() {

    return (
        <>
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
            </Row>
        </>
    )
}

export default AddTodo