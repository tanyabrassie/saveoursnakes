import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
	height: 48px;
	background-color: ${props => props.theme.colors.medPurple};
	border: none;
	display: block;
	cursor: pointer;
	margin: auto;
	font-weight: 600;
	border-radius: 50px;
	padding: 0 2.2em;
	font-size: 1em;
	transition: .5s opacity;

	:hover {
		opacity: .8; 
	}
`;

const Button = (props) => {
	return (
		<PrimaryButton>{props.innerText}</PrimaryButton>
	);
}

export default Button;