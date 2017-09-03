import React from 'react';
import styled from 'styled-components';
import Button from './ui/Button';
import Grasslands from './Grasslands';

const Headline = styled.h1`
	font-weight: 900;
	text-align: center;
	font-size: 46px;
`;

const Paragraph = styled.p`
	line-height: 23px;
	width: 75%;
	margin: 1em auto;
	max-width: 600px;
`;

const HeadlineContainer = styled.div`
	margin: 5em 0;
`;

const Ampersand = styled.img`
	display: block;
	margin: 2em auto;
	opacity: .9;

`;

const Greeting = () => {
	return (
		<section>
			<HeadlineContainer>
				<Headline>Save our Snakes</Headline>
					<Ampersand src="/images/ampersand.svg"/>
				<Headline>Protect our Parks</Headline>
			</HeadlineContainer>
			<Paragraph>Our local snakes are in peril! Since the mid 1800s, snake populations in Prospect Park have experienced unpredecented decline.  Urbanization and gentrification of Prospect Park and the surrounding areas led to the significant loss of natural snake dwellings. Conesquently, the 20th century saw mass emigrations of snake colonies from the area.  Continued construction of luxury high-rises along the park’s perimeter and development of park trails have made the area a vertiable danger zone for those snakes choosing to remain.  Many snakes have been forced out of their homes with no viable alternatives. Nooks and crannies, once attractive housing options for displaced snakes have been rapidly filled with concrete, and subway tunnels are now largely controlled by the City Rat populations after the Tunnel Turf War of 1932.  Snakes need our help! Sponsor a snake today and help save a life.</Paragraph>

			<Button innerText="Sponsor a Snake"/>
			<Grasslands/>
		</section>
	);
};

export default Greeting;

