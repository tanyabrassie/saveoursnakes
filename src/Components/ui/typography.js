import styled from 'styled-components';
import {Text as RebassText} from 'rebass';

export const Headline = styled.h1`
	font-size: 1.5em;
	font-weight: 600;
	text-align: center;
	margin: 2em 0;
	color: ${props => props.theme.colors.electricPurple};
`;

export const SecondaryHeadline = styled.h2`
	font-size: 1.2em;
	font-weight: 600;
	text-align: center;
`;

export const Paragraph = styled.p`
	line-height: 1.5em;
`;

export const AppText = styled(RebassText)`
	color: ${props => props.theme.colors.murkyPurple};
`;
