import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import About from './Components/About';

import { render } from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';

import './main.css';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Route exact path="/" component={App}/>
				<Route path ="/about" component={About}/>
			</div>
		</BrowserRouter>
	);
}

render(<Root/>, document.querySelector('#mount'));































