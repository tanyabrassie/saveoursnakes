import React from 'react';
import styled from 'styled-components';
import {Flex, Container} from 'rebass';

import {Headline, BasicText} from '../ui/typography';

const Wrapper = styled(Flex)`
  background-color: ${props => props.theme.colors.delicatePink};
`;

const SaviorWall = ({ memberList }) => {
  return (
    <Wrapper p={2} flexDirection="column">
      <Headline py={2} is="h2">Saviors Wall</Headline>
      <Flex flexDirection="column">
        {memberList && memberList.map((member, index) => {
          return (
            <Flex py={2} key={index}>
              <BasicText mr={2} is="strong">{member.firstName} {member.lastName}</BasicText>
              <BasicText is="span">Assigned zone: {member.zipcode}</BasicText>
            </Flex>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default SaviorWall;