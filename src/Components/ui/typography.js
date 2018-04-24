import styled from 'styled-components';
import {Text as RebassText} from 'rebass';

export const Headline = styled(RebassText)`
	font-size: 1.5em;
	font-weight: 600;
	color: ${props => props.theme.colors.electricPurple};
`;

export const MegaHeadline = Headline.extend`
	font-size: 2.5em;
	font-weight: 900;
`;

export const SecondaryHeadline = styled.h2`
	font-size: 1.2em;
	font-weight: 600;
`;

export const Paragraph = styled.p`
	line-height: 1.5em;
`;

export const BasicText = styled(RebassText)`
	color: ${props => props.theme.colors.murkyPurple};
	line-height: 1.5;
`;
