import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Sponsor from './Sponsor';


const Content = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/about' component={About}/>
				<Route exact path='/sponsor' component={Sponsor}/>
			</Switch>
		</div>
	);	
};

export default Content;