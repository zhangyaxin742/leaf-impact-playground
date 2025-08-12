import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Default to dark theme
if (!document.documentElement.classList.contains('dark')) {
  const saved = localStorage.getItem('theme');
  if (!saved || saved === 'dark') document.documentElement.classList.add('dark');
}

createRoot(document.getElementById("root")!).render(<App />);
