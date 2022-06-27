import { textEllipsis } from '@/styles/mixins/textEllipsis';
import { rem, darken } from 'polished';
import styled from 'styled-components';

export const StyledItem = styled.li<{
	$isDone: boolean;
}>`
	width: ${rem(300)};
	padding: ${rem(20)};
	margin: 0 auto;

	${({ $isDone }) => $isDone && 'text-decoration: line-through'};

	&:hover {
		background-color: ${darken(0.5, 'lightgrey')};
	}

	${textEllipsis()}
`;

export const StyledOtherItem = styled(StyledItem)`
	background-color: pink;
`;
