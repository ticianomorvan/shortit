import { styled } from 'root/stitches.config';
import {
  StyledSection,
  StyledTitle,
  StyledParagraph,
} from '@/components/HeroSection/components'
import URLShortener from '@/components/URLShortener';

const HeroSection = () => (
  <StyledSection>
    <StyledTitle>
      Short.it
    </StyledTitle>

    <StyledParagraph>
      Just write or paste a full URL and click on
      {' '}
      <b style={{ textDecoration: 'underline' }}>Shortit!</b>
    </StyledParagraph>
    <URLShortener />
  </StyledSection>
)

export default HeroSection;