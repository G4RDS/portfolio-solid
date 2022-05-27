import { style } from '@vanilla-extract/css';
import { themeVars } from '../../../index.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: ['100vh', '100dvh'],
  padding: 64,
});

export const nameContainer = style({
  color: themeVars.colors.text.dark,
  fontWeight: 'bold',
  lineHeight: 1,
});

export const name = style({
  display: 'block',
  fontSize: 96,
});

export const position = style({
  display: 'block',
  marginTop: 16,
  fontSize: 48,
});

export const uiExamplesContainer = style({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2rem',
  width: '50vw',
});

export const uiExamplesSquare = style({
  position: 'absolute',
  zIndex: -1,
  width: '20rem',
  height: '20rem',
  background: themeVars.colors.primary[500],
  borderRadius: '4rem',
  transform: 'rotate(-15deg)',
});
