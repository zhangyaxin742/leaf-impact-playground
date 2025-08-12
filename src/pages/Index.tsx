import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '@/state/AppState';

const Index = () => {
  const nav = useNavigate();
  const { onboardingComplete } = useAppState();

  useEffect(() => {
    document.title = 'Leaf.io — Budget. Learn. Sim your impact.';
    nav(onboardingComplete ? '/dashboard' : '/onboarding', { replace: true });
  }, [onboardingComplete, nav]);

  return null;
};

export default Index;
