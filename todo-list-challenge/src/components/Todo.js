import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography, Checkbox } from 'antd';

const { Item } = List;
const { Text } = Typography;

const Todo = ({ onClick, completed, text }) => (
	<Item>
		<Checkbox onClick={onClick} style={{marginRight: '5px'}} checked={completed} ></Checkbox> <Text
    style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {text}</Text>
	</Item>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;
