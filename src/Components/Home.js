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

const Content = styled(Flex)`
	max-width: 820px;
	margin: auto;
`;

const Home = (props) => {
	return (
		<div>
      <SnakeStory />
      <Grasslands />
      <SignUpZone align="center">
        <Content flexDirection={["column", "column", "row"]}>
          <Box px={2} w={1/2}><SaviorWall memberList={props.memberList}/></Box>
          <Box px={2} w={1/2}><SnakeForm addMember={props.addMember}/></Box>
        </Content>
      </SignUpZone>
		</div>
	);
};

export default Home;

