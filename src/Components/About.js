import React from 'react';
import styled from 'styled-components';
import { Headline } from './ui/typography';
import SnakeTiles from './SnakeTiles';
import snakeData from '../snakedata';

function filterSnakes (snake) {
	return !snake.featured;
}

var filteredSnakes = snakeData.filter(filterSnakes);

console.log (filteredSnakes);

class About extends React.Component {
	constructor() {
		super();
		this.state = {
		  count: 0,
		};
	}

	render() {
		return (
		<section>
			<Headline>Meet the Snakes in Your Area.</Headline>
			<SnakeTiles snakeData={filteredSnakes}/>
		</section>
		);
	};
}	
export default About;