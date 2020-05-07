import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.mainPurple};
  width: 100%;
  opacity: 0.7;
`;

const FooterText = styled.p`
  text-align: center;
  display: block;
  color: #fff;
  padding: 40px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Save our Snakes was created by Tanya Brassie,
        <strike>Val Geyvandov</strike> and Maurice Slithers.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
