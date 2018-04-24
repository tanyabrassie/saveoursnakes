import React from 'react';
import styled from 'styled-components';
import FactBox from '../FactBox';
import { Headline } from '../ui/typography';

const Tiles = styled.section`
	display: flex;	
	justify-content: center;
	margin: 2em 0;
	flex-wrap: wrap;	
`;

const SnakeTiles = (props) => {
	const snakeData = props.snakeData;

	return (
		<Tiles>
			{snakeData.map(function(snake, index){
				return (
					<FactBox key={index} snake={snake}/>
				);
			})}
		</Tiles>
	);

}

export default SnakeTiles;	