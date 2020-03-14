import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { List } from 'antd';
import AddTodo from '../containers/AddTodo';
import Footer from './Footer';

//crie uma forma de popular o componente List com o componente Todo de acordo os as possíveis pros passadas ao TodoList
const TodoList = ({ todos, onTodoClick }) => (
	<List
		header={<AddTodo />}
		footer={<Footer />}
    bordered
    pagination={{ pageSize: 10 }}
		dataSource={todos}
		renderItem={(todo, index) => <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />}
	/>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
