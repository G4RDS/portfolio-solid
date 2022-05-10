import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from '@vanilla-extract/css';

globalFontFace('Metropolis', {
  src: 'url("/public/fonts/metropolis-regular.otf")',
  fontWeight: 'normal',
});
globalFontFace('Metropolis', {
  src: 'url("/public/fonts/metropolis-semi-bold.otf")',
  fontWeight: '600',
});
globalFontFace('Metropolis', {
  src: 'url("/public/fonts/metropolis-bold.otf")',
  fontWeight: 'bold',
});

globalStyle('body', {
  margin: 0,
  fontFamily:
    "Metropolis, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('code', {
  fontFamily:
    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
});

export const themeVars = createGlobalTheme(':root', {
  colors: {
    text: {
      dark: '#0f172a',
      base: '#334155',
      light: '#64748b',
    },
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  breaks: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
  },
  easings: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  shadows: {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
});
