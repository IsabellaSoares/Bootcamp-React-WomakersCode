import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

const MenuComponent = ({ history }) => (
	<Menu mode="horizontal" theme="dark">
		<Menu.Item onClick={() => history.push('/')}>
			<HomeOutlined />Home
		</Menu.Item>
		<Menu.Item onClick={() => history.push('/sobre')}>
			<InfoCircleOutlined />Sobre
		</Menu.Item>
	</Menu>
);

export default withRouter(MenuComponent);
