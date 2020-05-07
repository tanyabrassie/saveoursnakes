import React from "react";
import styled from "styled-components";

const GrasslandsContainer = styled.section`
  position: relative;
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
`;

const Grasslands = () => {
  return (
    <GrasslandsContainer>
      <Image src="/images/grass.svg" />
    </GrasslandsContainer>
  );
};

export default Grasslands;
