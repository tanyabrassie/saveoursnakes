import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
	height: 40px;
	background-color: #d2bcff;
	border: none;
	border-radius: 50px;
	padding: 0 1.55em;
	font-size: 1.25em;
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