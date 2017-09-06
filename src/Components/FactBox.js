import React from 'react';
import styled from 'styled-components';
import { Paragraph, SecondaryHeadline } from './ui/typography';
import { colorMorph, slowBob } from './ui/animations';

const FactBoxContainer = styled.div`
	max-width: 250px;
	padding: 2em;
	margin: 1em;
	background-color: ${props => props.theme.colors.white};
	display: flex;
	position: relative;
	justify-content: center;
	flex-direction: column;
`;

const Image = styled.img`
	width: 100%;
	animation: ${slowBob} 1.5s alternate infinite ease-in-out;
`;

const ImageContainer = styled.div`
	padding: 3em 2em 2em;
`;

const StyledSecondaryHeadline = styled(SecondaryHeadline)`
	text-align: center; 
	padding: .75em 0 1em 0; 
`;

const HarmlessBanner = styled.div`
	border-radius: 50px;
	background-color: #f163ff;
	padding: .7em;
	opacity: .8;
	color: #fff;
	font-size: .75em;
	width: 100px;
	text-align: center;
	top: 20px;
	position: absolute;
	right: -15px;
`;

const FactBox = (props) => {
	return (
		<FactBoxContainer>
		<HarmlessBanner>Certified harmlesss!</HarmlessBanner>
			<ImageContainer><Image src={props.snake.img}/></ImageContainer>
			<StyledSecondaryHeadline>{props.snake.title}</StyledSecondaryHeadline>
			<Paragraph>{props.snake.text}</Paragraph>
		</FactBoxContainer>
	);
}

export default FactBox;
