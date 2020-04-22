import { css } from '@emotion/core';

export const AppOverlay = (dark) => ({
  // Color
  backgroundColor: dark ? '#393d43' : '#fff',

  // Transitions
  transition: 'background-color 1.2s ease',

  // Dimensions
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
});

export const AppContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const BreakDiv = {
  flexBasis: '100%',
  height: 0,
};

export const AppButtonWrapper = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '16px',
};

export const AppButtonMargin = {
  margin: '0px 8px',
};
