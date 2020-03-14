import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography } from 'antd';

const { Item } = List;
const { Text } = Typography;

const Todo = ({ onClick, completed, text }) => (
	<Item
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
		onClick={onClick}
	>
		<Text>{text}</Text>
	</Item>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;
