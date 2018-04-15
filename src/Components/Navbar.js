import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.header`
	padding: 0 20px;
	box-shadow: ${props => props.theme.dropShadows.gray};
	background-color: ${props => props.theme.colors.white};
	height: 75px;	
	position: relative;
`;

const LinkList = styled.ul`
	position: absolute;
	top: 2em; 
	right: 1em;
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
	max-width: 120px;
`;

const LogoLink = styled(Link)`
	display: inline-block;
	position: absolute;
	top: 1em;
	left: 2em;
`;

const Navbar = () => {
	return (
		<NavbarWrapper>
			<LogoLink to="/"><Logo src="/images/logo-alt.png"/></LogoLink>
			<LinkList>
				<ListItem><StyledLink to="/about">About the Snakes</StyledLink></ListItem>
				<ListItem><StyledLink to ="/savedsnakes">Saved Snakes</StyledLink></ListItem>
			</LinkList>
		</NavbarWrapper>
	);
};

export default Navbar;