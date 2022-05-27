import { style } from '@vanilla-extract/css';
import { themeVars } from '../../../../index.css';

export const container = style({
  minWidth: '20rem',
  padding: '1.5rem',
  borderRadius: '1rem',
  background: '#fff',
  boxShadow: themeVars.shadows['2xl'],
});

export const userProfileContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const userProfileIcon = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
});

export const userProfileTextArea = style({
  marginLeft: '1rem',
});

export const userProfileName = style({
  color: themeVars.colors.text.base,
  fontSize: '2rem',
  fontWeight: 'bold',
});

export const userProfileUserId = style({
  color: themeVars.colors.text.light,
  fontWeight: 'bold',
});

export const divider = style({
  margin: '1.5rem 0 0.5rem',
  borderTop: `1px solid ${themeVars.colors.gray[200]}`,
});

export const menuList = style({
  listStyle: 'none',
});

export const menuItem = style({
  padding: '0.5rem',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  color: themeVars.colors.text.base,
  ':hover': {
    background: themeVars.colors.gray[50],
  },
});
