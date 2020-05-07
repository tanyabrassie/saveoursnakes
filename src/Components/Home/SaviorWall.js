import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

import { Headline, BasicText } from "../ui/typography";

const Wrapper = styled(Flex)`
  background-color: ${(props) => props.theme.colors.delicatePink};
  border-right: 1px solid #00506a61;
`;

const SaviorWall = ({ memberList }) => {
  return (
    <Wrapper my={4} px={5} flexDirection="column">
      <Headline py={2} is="h2">
        Snake Saviors Wall
      </Headline>
      <Flex flexDirection="column">
        {memberList.length > 0 ? (
          memberList.map((member, index) => {
            return (
              <Flex justify="space-between" py={2} key={index}>
                <BasicText mr={2} is="strong">
                  {member.firstName} {member.lastName}
                </BasicText>
                <BasicText is="span">Saving Zone: {member.zipcode}</BasicText>
              </Flex>
            );
          })
        ) : (
          <Flex p={3} bg={"#ffffffab"}>
            <BasicText>
              No snakes currently are being saved. Register now!
            </BasicText>
          </Flex>
        )}
      </Flex>
    </Wrapper>
  );
};

export default SaviorWall;
