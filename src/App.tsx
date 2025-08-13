import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppStateProvider } from "@/state/AppState";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { lazy, Suspense } from "react";

const SimpleTest  = lazy(() => import("./pages/SimpleTest"));
const Onboarding  = lazy(() => import("./pages/Onboarding"));
const Dashboard   = lazy(() => import("./pages/Dashboard"));
const Budget      = lazy(() => import("./pages/Budget"));
const Invest      = lazy(() => import("./pages/Invest"));
const Learn       = lazy(() => import("./pages/Learn"));
const Profile     = lazy(() => import("./pages/Profile"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppStateProvider>
        <BrowserRouter>
          <Suspense fallback={<div style={{ color:"#fff", textAlign:"center", marginTop:"50%" }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/test" element={<SimpleTest />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppStateProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;