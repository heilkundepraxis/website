'use client';

import { useTheme } from 'next-themes';

import Moon from '@components/icons/Moon';
import Sun from '@components/icons/Sun';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme = 'light' === resolvedTheme ? 'dark' : 'light';
    setTheme(nextTheme === (systemTheme || 'light') ? 'system' : nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="-ml-1 w-8 h-8 relative flex justify-center items-center rounded-full transition-colors hover:bg-slate-800 hover:dark:bg-amber-400 dark:text-white hover:text-dark-50 hover:dark:text-dark-800"
      title="Farbschema wechseln"
    >
      <Sun className="text-2xl absolute left-1 top-1 scale-0 dark:scale-100" />
      <Moon className="text-2xl absolute left-1 top-1 -rotate-90 scale-100 dark:scale-0" />
      <span className="sr-only">Farbschema wechseln</span>
    </button>
  );
};

export default ThemeToggle;
