import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState<string>(() => {
    const localTheme = localStorage.getItem('theme');
    return localTheme || 'light';
  });

  const toggleDark = () => {
    theme === 'dark'
      ? setTheme('light')
      : setTheme('dark');
  };

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
