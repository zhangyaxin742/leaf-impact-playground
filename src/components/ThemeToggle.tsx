import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex items-center h-9 px-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-smooth"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    >
      <span className="text-xs text-muted-foreground mr-2">Theme</span>
      <span className="text-gradient-primary font-medium">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
};
