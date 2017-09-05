import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const PrimaryButton = styled(Link)`
	background-color: ${props => props.theme.colors.medPurple};
	display: block;
	cursor: pointer;
	margin: auto;
	text-align: center;
	font-weight: 600;
	border-radius: 50px;
	padding: 1.2em;
	font-size: 1em;
	transition: .5s opacity;

	:hover {
		opacity: .8; 
	}
`;

const Button = (props) => {
	return (
		<PrimaryButton to={props.url}>{props.innerText}</PrimaryButton>
	);
}

export default Button;