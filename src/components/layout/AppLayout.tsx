import { ReactNode } from "react";
import { MobileTabBar } from "@/components/navigation/MobileTabBar";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  console.log('AppLayout rendered');
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-white/10">
        <div className="max-w-screen-sm mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/dashboard" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg elev-1 bg-gradient-primary" aria-hidden />
            <span className="font-display font-semibold text-lg leading-none group-hover:opacity-90 text-gradient-primary">Leaf.io</span>
          </a>
          <div className="flex items-center gap-3">
            {/* future: inject Sheep widget trigger */}
            <div className="h-9 w-9 rounded-lg border border-white/10 bg-white/5" aria-label="Sheep widget placeholder" />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-screen-sm w-full mx-auto px-4 py-4">
        {children}
      </main>

      <MobileTabBar />
    </div>
  );
};
