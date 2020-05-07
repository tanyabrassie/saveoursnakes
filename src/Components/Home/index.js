import React from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import Grasslands from "../Grasslands";
import SobStory from "./SobStory";
import SaviorWall from "./SaviorWall";
import SnakeForm from "./SnakeForm";

const SignUpZone = styled.section`
  background-color: ${(props) => props.theme.colors.delicatePink};
  padding: 20px 60px;
`;

const Content = styled(Flex)`
  max-width: 820px;
  margin: auto;
`;

const Home = (props) => {
  return (
    <div>
      <SobStory />
      <Grasslands />
      <SignUpZone align="center">
        <Content flexDirection={["column", "column", "row"]}>
          <Box px={0} w={1 / 2}>
            <SaviorWall memberList={props.memberList} />
          </Box>
          <Box px={0} w={1 / 2}>
            <SnakeForm addMember={props.addMember} />
          </Box>
        </Content>
      </SignUpZone>
    </div>
  );
};

export default Home;
