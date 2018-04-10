import React from 'react';

import {Headline} from './ui/typography';
import styled from 'styled-components';
import SnakeForm from './Sections/SnakeForm';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const SnakesSponsoredBanner = styled.div`
	background-color: red;
	width: 200px;
	text-align: center;
	padding: 5px;
`;

const snakeCount = getRandomInt(1,200);

class Sponsor extends React.Component {
	constructor () {
		super();

		this.addSnake = this.addSnake.bind(this);

		this.state = {
			sponsoredSnake: { },
			snakesSponsored: snakeCount,
		};
		
	}

	addSnake() {
		const snakeIncrease = this.state.snakesSponsored + 1;
		this.setState({snakesSponsored: snakeIncrease});
	}

	render() {
		return (
			<section>
				<Headline>Sponsor a Snake Today</Headline>
				<SnakesSponsoredBanner>Snakes Sponsored:{this.state.snakesSponsored}</SnakesSponsoredBanner>
		

				<Form
				addSnake={this.addSnake}/>
			</section>
		);
	};
};

export default Sponsor;
