import { style } from '@vanilla-extract/css';
import { themeVars } from '../../../index.css';

export const container = style({
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
