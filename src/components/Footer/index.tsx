import { FaHeart } from 'react-icons/fa';
import { styled } from 'root/stitches.config';;

const StyledFooter = styled('footer', {
  position: 'fixed',
  bottom: '10px',
  width: '100vw',
  fontSize: '.85em',
  textAlign: 'center',
  opacity: '50%'
})

const FooterContent = styled('p', {
  color: '$text',
})

const AuthorName = styled('a', {
  color: '$primary600',
})

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      Developed with
      {' '}
      <FaHeart />
      {' '}
      by
      {' '}
      <AuthorName
        href='https://ticianomorvan.me/link-tree'
        hrefLang='es'
        rel='noreferrer'
        target="_blank"
      >
        Ticiano Morvan
      </AuthorName>
    </FooterContent>
  </StyledFooter>
)

export default Footer;
