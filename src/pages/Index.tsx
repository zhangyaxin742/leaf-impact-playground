
// pages/Index.tsx
import { Navigate } from "react-router-dom";
import { useAppState } from "@/state/AppState";

export default function Index() {
  const { onboardingComplete } = useAppState();
  return <Navigate to={onboardingComplete ? "/dashboard" : "/onboarding"} replace />;
}
