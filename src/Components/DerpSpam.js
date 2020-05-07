import React from "react";
import { Flex, Image, Box } from "rebass";
import styled from "styled-components";

import { colorMorph, crawlIn } from "./ui/animations";

const DerpAd = styled(Flex)`
  height: 60px;
  animation: ${colorMorph} 0.5s alternate infinite ease-in-out,
    ${crawlIn} 10s forwards;
  align-items: center;
  width: 75%;
  margin: auto;
  position: relative;
  top: -70px;
  border-radius: 3px;
  padding: 10px;
  border: 3px solid ${(props) => props.theme.colors.electricPurple};
  justify-content: space-between;
`;

const DerpIcon = styled(Image)`
  width: auto;
  height: 100%;
`;

const DerpHeadline = styled.h1`
  font-size: 20px;
  font-weight: 700;
  padding: 0 10px;
  color: ${(props) => props.theme.colors.white};
`;

const DerpSpam = (props) => {
  return (
    <DerpAd is="a" href="http://derpfaces.net/">
      <Box p={1}>
        <DerpIcon src="/images/coolglasses.png" />
      </Box>
      <Box p={1}>
        <DerpIcon src="/images/bigbah.png" />
      </Box>
      <Box p={1}>
        <DerpIcon src="/images/thumbsup.png" />
      </Box>
      <DerpHeadline>{props.targetedMessage}</DerpHeadline>
      <Box p={1}>
        <DerpIcon src="/images/winningsmile.png" />
      </Box>
      <Box p={1}>
        <DerpIcon src="/images/wornout.png" />
      </Box>
      <Box p={1}>
        <DerpIcon src="/images/sads.png" />
      </Box>
    </DerpAd>
  );
};

export default DerpSpam;
