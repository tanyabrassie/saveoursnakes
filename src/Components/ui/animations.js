import { keyframes } from "styled-components";

export const colorMorph = keyframes`
	from {
		background-color: #f163ff;
	}
	to {
		background-color: #7233f7;
	}
`;

export const slowBob = keyframes`
	0% {
		transform: translateY(0%);	
	}
	50% {
		transform: translateY(2%);	
	}	
	100% {
		transform: translateY(0%);
	}			
`;

export const slowRock = keyframes`
	0% {
		transform: rotate(-2deg);	
	}
	50% {
		transform: rotate(2deg);
	}
	100% {
		transform: rotate(-2deg);	
	}

`;

export const crawlIn = keyframes`
	0% {
		transform: translateY(0);	
	}
	100% {
		transform: translateY(70px);	
	}	
`;
