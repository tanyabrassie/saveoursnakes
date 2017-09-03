import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	background-color: #4500d5;
	width: 100%;
	opacity: 0.7;
`;

const FooterText = styled.div`
	text-align: center;
	color: #fff;
	padding: 40px 0;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Save our Snakes was created by Tanya Brassie, 
      Val Geyvandov and Maurice Slithers.</FooterText>
    </FooterContainer>
  );
}; 

export default Footer;