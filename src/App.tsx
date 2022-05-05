import { darkTheme, globalStyles, styled } from '../stitches.config'
import URLShortener from '@/components/URLShortener';
import useTheme from '@/hooks/useTheme';

// Components
import Navbar from '@/components/Navbar';

const MainContainer = styled('main', {
  background: '$background',
  height: '100vh',
  transitionDuration: '.25s',
  transitionProperty: 'background-color',
  fontFamily: 'Roboto Mono'
})

const App = () => {
  const [theme, toggleDark] = useTheme();
  globalStyles();

  return (
    <MainContainer className={theme === 'dark' ? darkTheme : ''}>
      <Navbar current={theme} switcher={toggleDark} />
      <URLShortener />
    </MainContainer>
  )
}

export default App
