import { styled } from 'root/stitches.config';

export const StyledForm = styled('form', {
  padding: '1em',
  borderRadius: '.5em',
  background: '$primary600',
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',

  '@xl': {
    flexDirection: 'row',
  }
});

export const StyledInput = styled('input', {
  padding: '.25em',
  border: 'none',
  borderRadius: '.5em',
  outline: 'none',

  '&:focus': {
    outline: '.15em solid $secondary600'
  }
})

export const StyledButton = styled('button', {
  border: 'none',
  borderRadius: '1em',
  padding: '.5em',
  color: 'black',
  cursor: 'pointer',
  background: '$secondary500',
  transition: '.15s all',

  '&:hover': {
    background: '$secondary400'
  }
})

export const ShortedLink = styled('a', {
  alignSelf: 'center',
  color: 'white',
  transition: '.15s all',

  '&:hover': {
    color: 'lightGray'
  }
})