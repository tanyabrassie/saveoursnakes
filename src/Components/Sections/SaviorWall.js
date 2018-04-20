import React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';

import {Headline} from '../ui/typography';

const Container = styled(Flex)`
  background-color: ${props => props.theme.colors.delicatePink};
`;

const SaviorWall = ({ memberList }) => {
  return (
    <Container>
      <Headline>Saviors Wall</Headline>
      {/* {memberList.map(member => <h1>{member.firstName}</h1>)} */}
      {memberList.map((member, index) => {
        return (
          <div key={index}>
            <strong>{member.firstName} {member.lastName}</strong>
            <span>Assigned zone: {member.zipcode}</span>
          </div>
        );
      })}
    </Container>
  );
};

export default SaviorWall;