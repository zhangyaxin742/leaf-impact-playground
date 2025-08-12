import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Budget, User } from '@/lib/mockData';
import { mockBudget, mockUser } from '@/lib/mockData';

interface AppState {
  user: User;
  budget: Budget;
  onboardingComplete: boolean;
  setUser: (u: Partial<User>) => void;
  setBudget: (b: Partial<Budget>) => void;
  completeOnboarding: () => void;
}

const Ctx = createContext<AppState | null>(null);

const LS_KEY = 'leafio_state_v1';

export const AppStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? JSON.parse(saved) : { user: mockUser, budget: mockBudget, onboardingComplete: false };
  });

  useEffect(() => { localStorage.setItem(LS_KEY, JSON.stringify(state)); }, [state]);

  const api = useMemo<AppState>(() => ({
    user: state.user,
    budget: state.budget,
    onboardingComplete: state.onboardingComplete,
    setUser: (u) => setState((s: any) => ({ ...s, user: { ...s.user, ...u } })),
    setBudget: (b) => setState((s: any) => ({ ...s, budget: { ...s.budget, ...b } })),
    completeOnboarding: () => setState((s: any) => ({ ...s, onboardingComplete: true })),
  }), [state]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
};

export const useAppState = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
};
