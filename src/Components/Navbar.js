import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.header`
	padding: 0 20px;
	background-color: ${props => props.theme.colors.palePurple};
	height: 75px;	
	position: relative;
`;

const LinkList = styled.ul`
	position: absolute;
	top: 2em; 
	right: 1em;
`;

const Link = styled.a`
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

const LogoLink = styled.a`
	display: inline-block;
	position: absolute;
	top: 1em;
	left: 2em;
`;

const Navbar = () => {
	return (
		<NavbarWrapper>
			<LogoLink><Logo src="/images/logo.svg"/></LogoLink>
			<LinkList>
				<ListItem><Link href="">About the Snakes</Link></ListItem>
				<ListItem><Link href="">Sponsor a Snake</Link></ListItem>
			</LinkList>
		</NavbarWrapper>
	);
};

export default Navbar;