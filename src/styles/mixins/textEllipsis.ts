import { css } from 'styled-components';

const textEllipsis = (width = '100%') => css`
	overflow: hidden;
	max-width: ${width};
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export { textEllipsis };
