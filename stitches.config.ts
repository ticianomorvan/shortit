import { createStitches } from '@stitches/react';

export const {
  styled,
  theme,
  config,
  createTheme,
  globalCss
} = createStitches({
  theme: {
    colors: {
      background: 'white',
      darkGray: '#393E41',
      gray: '#D3D0CB',
      lightGray: '#E7E5DF',
      primary400: '#44BBA4',
      primary500: '#3CA191',
      primary600: '#34877D',
      primary700: '#2C6C6A',
      primary800: '#245256',
      secondary400: '#E7BB41',
      secondary500: '#D19E3A',
      secondary600: '#BC8134',
      secondary700: '#A6642D',
      secondary800: '#904726'
    }
  },
  media: {
    xs: '(max-width: 320px)',
    sm: '(min-width: 321px)',
    md: '(min-width: 375px)',
    lg: '(min-width: 425px)',
    xl: '(min-width: 768px)',
    '2xl': '(min-width: 1024px)',
    '3xl': '(min-width: 1440px)',
  }
})

export const darkTheme = createTheme('dark', {
  colors: {
    background: '$darkGray'
  }
})

export const globalStyles = globalCss({
  '@import': 'url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap")',
})