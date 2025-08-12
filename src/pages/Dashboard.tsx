import { AppLayout } from '@/components/layout/AppLayout';
import { Sparkline } from '@/components/charts/Sparkline';
import { SheepPlaceholder } from '@/components/SheepPlaceholder';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockSpark } from '@/lib/mockData';
import { useAppState } from '@/state/AppState';

const BudgetBars = () => {
  const { budget } = useAppState();
  return (
    <div className="space-y-2">
      {budget.categories.map((c) => {
        const pct = Math.min(100, Math.round((c.spent / c.cap) * 100));
        return (
          <div key={c.name}>
            <div className="flex justify-between text-xs mb-1"><span>{c.name}</span><span>{pct}%</span></div>
            <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-primary" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Dashboard = () => {
  const { user } = useAppState();
  return (
    <AppLayout>
      <section className="space-y-4">
        <Card className="bg-card/60 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Available this week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-semibold">$52</div>
                <div className="text-xs text-muted-foreground">Toward monthly goal: 62%</div>
              </div>
              <Sparkline data={mockSpark} />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Impact focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">You chose: {user.values.join(' + ') || '—'}</div>
            <div className="flex gap-2">
              <Button variant="hero" className="flex-1">Add $5</Button>
              <Button variant="outline" className="flex-1">Add $10</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Budget snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <BudgetBars />
          </CardContent>
        </Card>

        <Card className="bg-card/60 border-white/10">
          <CardHeader className="pb-1"><CardTitle className="text-base">Impact story</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">Community solar in Detroit: powering 120 homes with a shared array.</div>
            <Button variant="link" className="px-0">Open simulator</Button>
          </CardContent>
        </Card>

        <SheepPlaceholder />
      </section>
    </AppLayout>
  );
};

export default Dashboard;
