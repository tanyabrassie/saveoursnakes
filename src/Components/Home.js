import React from 'react';
import styled from 'styled-components';
// import {Flex} from 'rebass';

import Grasslands from './Grasslands';
import SnakeStory from './Sections/SnakeStory';
import SaviorWall from './Sections/SaviorWall';

// // const SafetyZone = styled(Flex)`
// 	background-color: ${props => props.theme.colors.delicatePink};
// `;

const Home = () => {
	return (
		<section>
			<SnakeStory />
			<Grasslands />
			{/* <SafetyZone>
			
			</SafetyZone> */}
		</section>
	);
};

export default Home;

