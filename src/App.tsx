// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import SimpleTest from "./pages/SimpleTest";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";   // <- import directly for now
import Dashboard from "./pages/Dashboard";     // <- import directly for now

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{color:"#fff", padding:24}}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<SimpleTest />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<SimpleTest />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
