import styled from 'styled-components';

export const StyledItem = styled.li<{
	$isDone: boolean;
}>`
	max-width: 300px;
	padding: 20px;
	margin: 0 auto;

	${({ $isDone }) => $isDone && 'text-decoration: line-through'};

	&:hover {
		background-color: lightgrey;
	}
`;
