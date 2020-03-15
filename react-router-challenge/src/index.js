import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Menu from './Menu';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = React.lazy(() => import('./App'));
const Sobre = React.lazy(() => import('./Sobre'));

ReactDOM.render(
    <BrowserRouter>
        <Menu />
        <Suspense fallback="Loading...">     
            <Switch>
                <Route path="/" exact={true} component={App}></Route>
                <Route path="/sobre" component={Sobre}></Route>
            </Switch>
        </Suspense>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
