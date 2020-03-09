import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import MovieInfo from './MovieInfo/Info';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact={true} component={App} />
            <Route path="/movie/:id" component={MovieInfo} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
