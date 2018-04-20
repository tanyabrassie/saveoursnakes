import React from 'react';
import styled from 'styled-components';
import {Text} from 'rebass';

import Button from '../ui/Button';
import {HeadlineLarge, BasicText} from '../ui/typography';
import {colorMorph, slowRock} from '../ui/animations';


const LargeHeadline = styled.h1`
	font-weight: 900;
	text-align: center;
	font-size: 46px;
`;

const StyledParagraph = styled(BasicText)`
	width: 75%;
	margin: 1em auto 4em;
	max-width: 620px;
`;

const HeadlineContainer = styled.div`
	margin: 5em 0;
`;

const Ampersand = styled.img`
	display: block;
	margin: 2em auto;
	opacity: .9;
	animation: ${slowRock} 2s alternate infinite ease-in-out;
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

const ButtonContainer = styled.div`
	width: 250px;
	margin: auto;
`;

const SnakeStory = () => {
  return (
    <section>
      <HeadlineContainer>
        <BasicText textAlign="center">Save our Snakes</BasicText>
          <Ampersand src="/images/ampersand.svg"/>
        <LargeHeadline>Protect our Parks</LargeHeadline>
      </HeadlineContainer>
      <IconContainer>
        <Icon><img src="/images/construction.svg"/></Icon>
        <Icon><img src="/images/homelessness.svg"/></Icon>
        <Icon><img src="/images/populationdecline.svg"/></Icon>
      </IconContainer>
      <StyledParagraph>Our local snakes are in peril! Since the mid-1800s the area's snake population has declined by nearly 95%. The urbanization of Prospect Park and its surrounding areas in the late nineteenth century resulted in the significant loss of natural snake dwellings. Continuing construction of high-rise, luxury buildings along the park's perimeter has only intensified the problem and turned the area into a veritable danger zone for those brave snakes choosing to remain. Even more upsetting are the plights of those luckless snakes forced out of their dens with no viable alternatives. Nooks and crannies, once attractive housing options for displaced snakes, are being rapidly filled with concrete and the subway tunnels, once a save haven for those down and out, are now largely controlled by the anti-snake rat populations following their triumph in the Tunnel Turf Tusssle of 2010. Our snakes are under attack and they need your help! Sponsor a snake today and give a slithering friend the comfort and stability it needs to flourish and thrive in the Big Apple. </StyledParagraph>
      <ButtonContainer>
        <Button url="/about" innerText="Sponsor a Snake"/>
      </ButtonContainer>
    </section>
  );
};

export default SnakeStory;

