import { useContext } from 'react';
import { styled } from 'root/stitches.config';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '@/App';

const NavbarContainer = styled('nav', {
  width: '100%',
  position: 'fixed',
  display: 'flex',
  background: '$primary800',
  justifyContent: 'space-between',

  '& p, svg': {
    padding: '.5em',
    transition: '.15s ease-out all',
  }
})

const ApplicationName = styled('p', {
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: '$secondary400'
})

const GitHubLogo = styled(FaGithub, {
  fontSize: '1.5em',
  color: '$secondary400',

  '&:hover': {
    color: 'WhiteSmoke'
  }
})

const MoonIcon = styled(FaMoon, {
  color: 'LightBlue',

  '&:hover': {
    color: 'SkyBlue'
  }
})

const SunIcon = styled(FaSun, {
  color: '$secondary400',

  '&:hover': {
    color: 'Orange'
  }
})

const ThemeSwitch = styled('button', {
  background: 'none',
  border: 'none',
  width: 'max-content',
  height: 'max-content',
  fontSize: '1.5em',
  cursor: 'pointer'
})

const Navbar = ({ switcher }: { switcher: () => void }) => {
  const theme = useContext(ThemeContext);

  return (
    <NavbarContainer>
      <ApplicationName>
        Short.it
      </ApplicationName>
      <div>
        <ThemeSwitch
          type="button"
          onClick={switcher}
        >
          { theme === 'dark' ? <SunIcon /> : <MoonIcon /> }
        </ThemeSwitch>
        <a
          href="https://github.com/Ti7oyan/shortit"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubLogo />
        </a>
      </div>
    </NavbarContainer>
  )
}

export default Navbar;