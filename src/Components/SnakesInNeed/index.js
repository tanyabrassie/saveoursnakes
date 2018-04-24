import React from 'react';
import styled from 'styled-components';
import { MegaHeadline } from '../ui/typography';
import SnakeTiles from './SnakeTiles';
import snakeData from '../../snakedata';

function filterSnakes (snake) {
	return !snake.featured;
}

var filteredSnakes = snakeData.filter(filterSnakes);

class SnakesInNeed extends React.Component {
	constructor() {
		super();
		this.state = {
		  count: 0,
		};
	}

	render() {
		return (
		<section>
			<MegaHeadline py={4} textAlign="center">Snakes in Need</MegaHeadline>
			<SnakeTiles snakeData={filteredSnakes}/>
		</section>
		);
	};
}	
export default SnakesInNeed;