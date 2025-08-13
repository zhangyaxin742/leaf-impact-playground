import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "@/state/AppState";

export default function Index() {
  const { onboardingComplete } = useAppState();
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Leaf.io — Budget. Learn. Sim your impact.";
    nav(onboardingComplete ? "/dashboard" : "/onboarding", { replace: true });
  }, [onboardingComplete, nav]);

  return null; // shows nothing briefly; prefer <Navigate /> version above
}