import React from 'react';
import styled from 'styled-components';
import {Flex, Box} from 'rebass';

import Grasslands from './Grasslands';
import SnakeStory from './Sections/SnakeStory';
import SaviorWall from './Sections/SaviorWall';
import SnakeForm from './Sections/SnakeForm';
import {Paragraph} from './ui/typography';


const SignUpZone = styled.section`
	background-color: ${props => props.theme.colors.delicatePink};
`;

const SignUpZoneContent = styled(Flex)`
	max-width: 800px;
	margin: auto;
`;

const Home = (props) => {
	return (
		<div>
			<SnakeStory />
			<Grasslands />
			<SignUpZone align="center">
				<Flex>
					<Box w={1/2}><SaviorWall memberList={props.memberList}/></Box>
					<Box w={1/2}><SnakeForm addMember={props.addMember}/></Box>
				</Flex>
			</SignUpZone>
		</div>
	);
};

export default Home;

