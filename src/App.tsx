import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AppStateProvider } from "@/state/AppState";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test" lazy={() => import('./pages/SimpleTest').then(m=>({ Component: m.default }))} />
            <Route path="/onboarding" lazy={() => import('./pages/Onboarding').then(m=>({ Component: m.default }))} />
            <Route path="/dashboard" lazy={() => import('./pages/Dashboard').then(m=>({ Component: m.default }))} />
            <Route path="/budget" lazy={() => import('./pages/Budget').then(m=>({ Component: m.default }))} />
            <Route path="/invest" lazy={() => import('./pages/Invest').then(m=>({ Component: m.default }))} />
            <Route path="/learn" lazy={() => import('./pages/Learn').then(m=>({ Component: m.default }))} />
            <Route path="/profile" lazy={() => import('./pages/Profile').then(m=>({ Component: m.default }))} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
