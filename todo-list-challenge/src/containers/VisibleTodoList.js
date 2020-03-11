import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { Button, Row, Col } from 'antd';
import { Table } from 'antd';
import { CheckOutlined } from '@ant-design/icons';


function VisibleTodoList ({ todos, setTodoComplete }) {
  const columns = [
    {
      title: 'Todo',
      dataIndex: 'todo',
      key: 'todo',
      align: 'center',
      width: '80%',
      render(text, record) {
        return {
          props: {
            style: { textDecoration: (record['completed'] ? 'line-through' : 'none')},
          },
          children: <div>{text}</div>
        };
      },
    },
    {
      title: 'Complete!',
      key: 'action',
      align: 'center',
      render: (record) => (
        <span>
          <Button shape="circle" icon={<CheckOutlined />} size="medium" onClick={() => setTodoComplete(record.key)} />
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