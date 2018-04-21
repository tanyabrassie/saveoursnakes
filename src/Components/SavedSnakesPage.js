import React from 'react';
import {Flex, Box, Button} from 'rebass';
import styled from 'styled-components';
import {Headline, BasicText} from './ui/typography';

const MemberBox = styled(Button)`
	box-shadow: 1px 1px 6px 0px #eaeaea;
	border: 1px solid #eaeaea;
	background-color: #ffffff;
	cursor: pointer;
	
	&:hover {
		background-color: ${props => props.theme.colors.mainPurple};
		color: ${props => props.theme.colors.white};
	}
`;

class SavedSnakesPage extends React.Component {
	constructor(props) {
		super();
		this.state = {
			membersWithData: []
		};
	}

	render() {
		return (
			<section>
				<Headline>Rehabilited Snake Directory</Headline>
				<BasicText>Read more about our heroes and those they've saved</BasicText>
				{this.props.memberList.map((member, index) => {
					return (
						<Flex>
							<MemberBox p={3} key={index}>
								<Box p={2}>
									<BasicText p={1} is="span">{member.firstName} {member.lastName}</BasicText>
									<BasicText is="span">Assigned zone: {member.zipcode}</BasicText>
								</Box>
							</MemberBox>
						</Flex>
					);
				})}
				<button>Click Me!</button>
			</section>
		);
	};
}	
export default SavedSnakesPage;