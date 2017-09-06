import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';


const Content = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/about' component={About}/>
			</Switch>
		</div>
	);	
};

export default Content;