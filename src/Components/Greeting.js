import React from 'react';
import styled from 'styled-components';
import Button from './ui/Button';

const Headline = styled.h1`
	font-family: 'Fredoka One', cursive;
	text-align: center;
	font-size: 46px;
`;

const Greeting = () => {
	return (
		<section>
			<Headline>Save our Snakes</Headline>
			&
			<Headline>Protect our Parks</Headline>

			<p>Our local snakes are in peril! Since the mid 1800s, snake populations in Prospect Park have experienced unpredecented decline.  Urbanization and gentrification of Prospect Park and the surrounding areas led to the significant loss of natural snake dwellings. Conesquently, the 20th century saw mass emigrations of snake colonies from the area.  Continued construction of luxury high-rises along the park’s perimeter and development of park trails have made the area a vertiable danger zone for those snakes choosing to remain.  Many snakes have been forced out of their homes with no viable alternatives. Nooks and crannies, once attractive housing options for displaced snakes have been rapidly filled with concrete, and subway tunnels are now largely controlled by the City Rat populations after the Tunnel Turf War of 1932.  Snakes need our help! Sponsor a snake today and help save a life.</p>
			<Button innerText="Sponsor a Snake"/>
		</section>
	);
};

export default Greeting;

