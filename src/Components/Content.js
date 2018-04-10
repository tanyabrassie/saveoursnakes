import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Sponsor from './Sponsor';

const Content = (props) => {
	return (
		<Switch>
			<Route exact path='/'><Home addMember={props.addMember}/></Route>
			<Route exact path='/about' component={About}/>
			<Route exact path='/sponsor' component={Sponsor}/>
		</Switch>
	);	
};

export default Content;