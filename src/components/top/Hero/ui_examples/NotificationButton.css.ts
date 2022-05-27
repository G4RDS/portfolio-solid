import { style } from '@vanilla-extract/css';
import { themeVars } from '../../../../index.css';

export const notificationButton = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '1rem',
  backgroundColor: themeVars.colors.success[500],
  boxShadow:
    '0 20px 25px -5px rgb(34 197 94 / 0.25), 0 8px 10px -6px rgb(34 197 94 / 0.25)',
  transition: `all 0.2s ${themeVars.easings.easeInOut}`,
  ':hover': {
    boxShadow:
      '0 20px 25px -5px rgb(34 197 94 / 0.5), 0 8px 10px -6px rgb(34 197 94 / 0.5)',
  },
});

export const bellIconSvg = style({
  width: '2rem',
  height: '2rem',
  fill: 'white',
});
