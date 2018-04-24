import React from 'react';
import {Button} from 'rebass';
import styled from 'styled-components';
import {BasicText} from '../ui/typography';


const Member = styled(Button)`
	box-shadow: 1px 1px 6px 0px #eaeaea;
	border: 1px solid #eaeaea;
	background-color: #ffffff;
	cursor: pointer;
	width: 100%;
	display: flex;
	color: ${props => props.theme.colors.murkyPurple};

	
	&:hover {
		background-color: ${props => props.theme.colors.mainPurple};
		color: ${props => props.theme.colors.white};
	}
`;

const ButtonText = styled.span`
	padding: 10px;
`;

const MemberButton = (props) => {
	const { member, index, getMemberToMap } = props;
	return (
		<Member 
			align="center" 
			p={5}
			onClick={() => getMemberToMap(member)}
		>
			<ButtonText>{member.firstName} {member.lastName}</ButtonText>
			<ButtonText>Assigned zone: {member.zipcode}</ButtonText>
		</Member>
	);
};

export default MemberButton;