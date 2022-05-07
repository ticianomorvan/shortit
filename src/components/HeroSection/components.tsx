import { styled } from '@stitches/react';

export const StyledSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  height: '100%',
  maxWidth: '80vw',
  textAlign: 'center',

  '@xs': {
    maxWidth: '80vw'
  }
});

export const StyledTitle = styled('h1', {
  fontSize: '2em',
  color: '$title',
  textDecoration: 'underline',
  textUnderlineOffset: '.2rem',
})

export const StyledParagraph = styled('p', {
  color: '$text',
  paddingBottom: '1em'
})