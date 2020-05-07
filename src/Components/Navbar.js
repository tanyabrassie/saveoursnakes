import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {slowRock} from './ui/animations';

const NavbarWrapper = styled.header`
	box-shadow: ${props => props.theme.dropShadows.gray};
	background-color: ${props => props.theme.colors.white};
	height: 75px;	
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 10;
`;

const LinkList = styled.ul`
	position: absolute;
	top: 32px; 
	right: 10px;
`;

const StyledLink = styled(Link)`
	font-size: 12px;

	&:hover {
		color: #f163ff;
	}
`;
	
const ListItem = styled.li`
	margin: 0 1.5em;
	display: inline-block;
`;

const Logo = styled.img`
	opacity: .9;
	max-width: 60px;
	animation: ${slowRock} 2s alternate infinite ease-in-out;
`;

const LogoLink = styled(Link)`
	display: inline-block;
	position: absolute;
	top: 1em;
	left: 2em;
`;

// TODO: add active states to links
const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoLink to="/"><Logo src="/images/ampersand.svg"/></LogoLink>
      <LinkList>
        <ListItem><StyledLink to="/snakes-in-need">Snakes in Need</StyledLink></ListItem>
        <ListItem><StyledLink to ="/savior-directory">Savior Directory</StyledLink></ListItem>
      </LinkList>
    </NavbarWrapper>
  );
};

export default Navbar;