import React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';

import {BasicText} from './ui/typography';

const Banner = styled(Flex)`
  background-color: ${props => props.theme.colors.tomatoRed};
  border-radius: 3px;
`;

const StyledText = BasicText.extend`
  color: ${props => props.theme.colors.white};
`;

const ErrorBanner = ({message}) => {
  return (
    <Banner py={3} px={2}>
      <StyledText>{message}</StyledText>
    </Banner>
  );
};

export default ErrorBanner;