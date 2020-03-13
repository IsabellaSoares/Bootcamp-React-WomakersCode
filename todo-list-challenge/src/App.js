import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import { Row, Col } from 'antd';

const style = {
  padding: '15px',
  height: '100%'
}

const App = () => (
	<Row style={style}>
		<Col span={24}>
			<AddTodo />
			<VisibleTodoList />
			<Footer />
		</Col>
	</Row>
);

export default App;
