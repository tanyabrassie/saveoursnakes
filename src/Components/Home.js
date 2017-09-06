import React from 'react';
import styled from 'styled-components';
import Button from './ui/Button';
import Grasslands from './Grasslands';
import SnakeTiles from './SnakeTiles';
import snakeData from '../snakedata';
import { Headline, Paragraph } from './ui/typography';
import { colorMorph, slowRock } from './ui/animations';

function filterSnakes (snake) {
	return snake.featured;
}

var filteredSnakes = snakeData.filter(filterSnakes);

console.log (filteredSnakes);

const LargeHeadline = styled.h1`
	font-weight: 900;
	text-align: center;
	font-size: 46px;
`;

const StyledParagraph = styled(Paragraph)`
	width: 75%;
	margin: 1em auto 4em;
	max-width: 600px;
`;

const HeadlineContainer = styled.div`
	margin: 5em 0;
`;

const Ampersand = styled.img`
	display: block;
	margin: 2em auto;
	opacity: .9;
	animation: ${slowRock} 2s alternate infinite ease-in-out;
`;


const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	content-align: center;
`;

const Icon = styled.div`
	max-width: 220px;
	padding: 2em;
	opacity: 0.8;

	img {
		width: 100%;
		max-width: 180px;
	}
`;

const ButtonContainer = styled.div`
	width: 250px;
	margin: auto;
`;

const Home = () => {
	return (
		<section style={{marginBottom: '5em'}}>
			<HeadlineContainer>
				<LargeHeadline>Save our Snakes</LargeHeadline>
					<Ampersand src="/images/ampersand.svg"/>
				<LargeHeadline>Protect our Parks</LargeHeadline>
			</HeadlineContainer>
			<IconContainer>
				<Icon><img src="/images/populationdecline.svg"/></Icon>
				<Icon><img src="/images/construction.svg"/></Icon>
				<Icon><img src="/images/homelessness.svg"/></Icon>
			</IconContainer>
			<StyledParagraph>Our local snakes are in peril! Since the mid-1800s the area's snake population has declined by nearly 95%. The urbanization of Prospect Park and its surrounding areas in the late nineteenth century resulted in the significant loss of natural snake dwellings. The contemporary construction of high-rise, luxury buildings along the park's perimeter has only intensified the problem and turned the area into a veritable danger zone for those brave snakes choosing to remain. Even more upsetting are the plights of those luckless snakes forced out of their dens with no viable alternatives. Nooks and crannies, once attractive housing options for displaced snakes, are being rapidly filled in with concrete and the subway tunnels, once a save haven for those down and out, are now largely controlled by the anti-snake rat populations following their triumph in the Tunnel Turf Tusssle of 2010. Our snakes are under attack and they need your help! Sponsor a snake today and give a slithering friend the comfort and stability it needs to flourish and thrive in the Big Apple. </StyledParagraph>
			<ButtonContainer>
				<Button url="/about" innerText="Sponsor a Snake"/>
			</ButtonContainer>
			<Grasslands/>
			<Headline>Learn more about Local Snakes</Headline>
			<SnakeTiles snakeData={filteredSnakes}/>
			<ButtonContainer>
				<Button url="/about" innerText="More About Local Snakes"/>
			</ButtonContainer>	
		</section>
	);
};

export default Home;

