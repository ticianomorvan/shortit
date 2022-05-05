import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleDark = () => {
    theme === 'dark'
      ? setTheme('light')
      : setTheme('dark');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    setTheme(localTheme ?? 'light');
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return [theme, toggleDark] as const;
}

export default useTheme;
