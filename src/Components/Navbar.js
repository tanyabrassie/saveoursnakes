import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
	background-color: #dcfff6;
	padding: 0 20px;
	height: 75px;
`;

const Navbar = () => {
	return (
		<NavbarWrapper>
			<ul>
				<li><a href="">About the Snakes</a></li>
				<li>Logo</li>
				<li><a href="">Sponsor a Snake</a></li>
			</ul>
		</NavbarWrapper>
	);
};

export default Navbar;