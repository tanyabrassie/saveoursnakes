import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {Button as RebassButton} from 'rebass';


const ButtonStyles = css`
	background-color: ${props => props.theme.colors.electricPurple};
	color: ${props => props.theme.colors.white};
	display: block;
	cursor: pointer;
	margin: auto;
	width: 100%;
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

export const ButtonLink = styled(Link)`
	${ButtonStyles};
`;

export const Button = styled(RebassButton)`
	${ButtonStyles};
`;

