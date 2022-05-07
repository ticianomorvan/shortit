import { darkTheme, globalStyles, styled } from '../stitches.config'
import { createContext } from 'react';
import { Toaster } from 'react-hot-toast';
import useTheme from './hooks/useTheme';

// Components
import Navbar from '@/components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const MainContainer = styled('main', {
  background: '$background',
  height: '100vh',
  transitionDuration: '.25s',
  transitionProperty: 'background-color',
  fontFamily: 'Roboto Mono'
})

export const ThemeContext = createContext<string>('light');

const App = () => {
  const [theme, toggleDark] = useTheme();
  globalStyles();

  return (
    <ThemeContext.Provider
      value={theme}
    >
      <MainContainer className={theme === 'dark' ? darkTheme : ''}>
        <Toaster />
        <Navbar switcher={toggleDark} />
        <HeroSection />
        <Footer />
      </MainContainer>
    </ThemeContext.Provider>
  )
}

export default App
