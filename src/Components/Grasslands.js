import React from 'react';
import styled from 'styled-components';

const GrasslandsContainer = styled.section`
	position: relative;
	margin: 3em 0 0 0;
`;

const Grasslands = () => {
	return (
		<GrasslandsContainer>
			<img src="/images/grass.svg"/>
		</GrasslandsContainer>
	);
};

export default Grasslands;