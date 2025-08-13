import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppStateProvider } from "@/state/AppState"; // <-- your context

// Default to dark theme BEFORE render
if (!document.documentElement.classList.contains('dark')) {
  const saved = localStorage.getItem('theme');
  if (!saved || saved === 'dark') document.documentElement.classList.add('dark');
}
console.log('Main.tsx loaded, theme:', document.documentElement.classList.toString());

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </QueryClientProvider>
  </React.StrictMode>
);