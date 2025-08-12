import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAppState } from '@/state/AppState';

const BudgetPage = () => {
  const { budget, setBudget } = useAppState();

  const updateCap = (name: string, cap: number) => {
    setBudget({ categories: budget.categories.map(c => c.name === name ? { ...c, cap } : c) });
  };

  const spare = Math.max(0, budget.income - budget.categories.reduce((s,c)=>s+c.cap,0));

  return (
    <AppLayout>
      <section className="space-y-4">
        <Card className="bg-card/60 border-white/10">
          <CardHeader><CardTitle className="text-base">Category setup</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {budget.categories.map(c => (
              <div key={c.name} className="flex items-center gap-3">
                <div className="w-24 text-sm">{c.name}</div>
                <Input type="number" className="flex-1" value={c.cap} onChange={(e)=>updateCap(c.name, Number(e.target.value))} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card/60 border-white/10">
          <CardHeader><CardTitle className="text-base">Redirect</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">Spare ${spare} → add to Climate Pool?</div>
            <Button variant="hero">Redirect $5</Button>
          </CardContent>
        </Card>
      </section>
    </AppLayout>
  );
};

export default BudgetPage;
