import React from 'react';

jest.mock('react-inlinesvg', () => ({
    __esModule: true,
    A: true,
    default: ({ ...rest }) => (
        <svg {...rest}>
        </svg>
    )
}));

global.IntersectionObserver = class IntersectionObserver {
	constructor() {}
  
	disconnect(): void {
	  return null;
	}
  
	observe(): void {
	  return null;
	}
  
	takeRecords(): void {
	  return null;
	}
  
	unobserve(): void {
	  return null;
	}
  } as any