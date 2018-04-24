import React from 'react';
import styled from 'styled-components';
import {Text} from 'rebass';

import {ButtonLink, Button} from '../ui/Button';
import {HeadlineLarge, MegaHeadline, BasicText} from '../ui/typography';
import {colormorph} from '../ui/animations';


const StyledParagraph = styled(BasicText)`
	width: 75%;
	margin: 1em auto 0;
	max-width: 620px;
`;

const HeadlineContainer = styled.div`
	margin: 5em 0;
`;

const Title = MegaHeadline.extend`
	animation: ${colormorph} 2s alternate infinite ease-in-out;
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	content-align: center;
`;

const Icon = styled.div`
	max-width: 220px;
	padding: 2em;
	opacity: 0.8;

	img {
		width: 100%;
		max-width: 180px;
	}
`;

const SobStory = () => {
  return (
    <section>
      <HeadlineContainer>
        <Title textAlign="center">Save our Snakes!</Title>
      </HeadlineContainer>
      <IconContainer>
        <Icon><img src="/images/construction.svg"/></Icon>
        <Icon><img src="/images/homelessness.svg"/></Icon>
        <Icon><img src="/images/populationdecline.svg"/></Icon>
      </IconContainer>
			<StyledParagraph>Since the mid 1800s, snake populations in Prospect Park have experienced unpredecented decline.  Urbanization and gentrification of Prospect Park and the surrounding areas led to the significant loss of natural snake dwellings.</StyledParagraph>
			<StyledParagraph>Conesquently, the 20th century saw mass emigrations of snake colonies from the area.  Continued construction of luxury high-rises along the park’s perimeter and development of park trails have made the area a vertiable danger zone for those snakes choosing to remain.  Many snakes have been forced out of their homes with no viable alternatives.</StyledParagraph>
			<StyledParagraph>Snakes need our help! Sponsor a snake today and help save a life.</StyledParagraph>
    </section>
  );
};

export default SobStory;

