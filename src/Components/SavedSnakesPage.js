import React from 'react';
import {Flex, Box, Button} from 'rebass';
import styled from 'styled-components';
import {Headline} from './ui/typography';

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

	// getMemberSnakes() {
	// 	const { memberList } = this.props;
	// 	const newMemberList = [];
	// 	memberList.map((member, index) => {
	// 		const zipcode = member.zipcode;
	// 		axios.get('http://localhost:4545/getSnakeProjects?zip=' + zipcode)
	// 			.then(response => {
	// 				newMemberList.push(Object.assign(member, {projectData: response.data}));
	// 				this.setState({membersWithData: newMemberList});
	// 			});
	// 	});
	// };

	render() {
		return (
			<section>
				<Headline>Rehabilited Snake Directory</Headline>
				<strong>Read more about our heroes and those they've saved</strong>
				{this.props.memberList.map((member, index) => {
					return (
						<Flex>
							<MemberBox p={3} key={index}>
								<Box p={2}>
									<strong>{member.firstName} {member.lastName}</strong>
									<span>Assigned zone: {member.zipcode}</span>
								</Box>
							</MemberBox>
						</Flex>
					);
				})}
				<button onClick={this.props.getMemberProjects}>Click Me!</button>
			</section>
		);
	};
}	
export default SavedSnakesPage;