import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import MovieInfo from './Info';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact={true} component={App} />
            <Route path="/movie/:id" component={MovieInfo} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
