import { style } from '@vanilla-extract/css';
import { themeVars } from '../../../../index.css';

export const container = style({
  minWidth: '20rem',
  padding: '1.5rem',
  borderRadius: '1rem',
  background: '#fff',
  boxShadow: themeVars.shadows['2xl'],
});

export const valueTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: themeVars.colors.text.base,
});

export const valueText = style({
  marginTop: 4,
  fontSize: '3rem',
  fontWeight: 'bold',
  color: themeVars.colors.text.dark,
});

export const compareContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: 8,
});

export const increasingIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: '50%',
  backgroundColor: themeVars.colors.success[100],
  fill: themeVars.colors.success[600],
});

export const assetIconSvg = style({
  width: 14,
  height: 14,
  color: 'inherit',
});

export const increasingRate = style({
  marginLeft: 4,
  color: themeVars.colors.success[600],
  fontWeight: 500,
});

export const compareDuration = style({
  marginLeft: 4,
  color: themeVars.colors.text.light,
});
