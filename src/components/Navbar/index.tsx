import { styled } from 'root/stitches.config';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';

const NavbarContainer = styled('nav', {
  width: '100%',
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

const Navbar = ({ current, switcher }: { current: string, switcher: () => void }) => {
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
          { current === 'dark' ? <SunIcon /> : <MoonIcon /> }
        </ThemeSwitch>
        <GitHubLogo />
      </div>
    </NavbarContainer>
  )
}

export default Navbar;