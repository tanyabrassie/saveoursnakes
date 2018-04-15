import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import SavedSnakesPage from './SavedSnakesPage';

const Content = (props) => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home 
					addMember={props.addMember}
					memberList={props.memberList}
				/>
			</Route>
			<Route exact path='/about' component={About}/>
			<Route exact path='/saved-snakes'>
				<SavedSnakesPage 
					memberList={props.memberList}
				/>
			</Route>
		</Switch>
	);	
};

export default Content;