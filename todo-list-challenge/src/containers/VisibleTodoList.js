import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { Button, Row, Col } from 'antd';
import { Table } from 'antd';
import { CheckOutlined } from '@ant-design/icons';


function VisibleTodoList ({ todos }) {
  const columns = [
    {
      title: 'Todo',
      dataIndex: 'todo',
      key: 'todo',
      align: 'center',
      width: '80%'
    },
    {
      title: 'Complete!',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <span>
          {/* <a style={{ marginRight: 16 }}>Invite {record.name}</a>
          <a>Delete</a> */}
          {/* <Button><CheckCircleOutlined /></Button> */}
          <Button shape="circle" icon={<CheckOutlined />} size="medium" />
        </span>
      ),
    },
  ];
  
  return (
    <>
      <Row type="flex"
      style={{ alignItems: "center" }}
      justify="center">
        <Col span={12}>
          <Table columns={columns} dataSource={todos} align="center" />
        </Col>
      </Row>
      
    </>
  )
  
}

export default VisibleTodoList