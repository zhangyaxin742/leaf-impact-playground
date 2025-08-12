import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { SheepPlaceholder } from '@/components/SheepPlaceholder';

const InvestPage = () => {
  const [weekly, setWeekly] = useState(20);
  const [risk, setRisk] = useState(50);
  const [compare, setCompare] = useState<'fin'|'impact'>('fin');

  return (
    <AppLayout>
      <section className="space-y-4">
        <Card className="bg-card/60 border-white/10">
          <CardHeader><CardTitle className="text-base">Build mock portfolio</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-xs mb-1">Weekly contribution: ${weekly}</div>
              <Slider defaultValue={[weekly]} min={0} max={100} onValueChange={(v)=>setWeekly(v[0])} />
            </div>
            <div>
              <div className="text-xs mb-1">Risk: {risk}</div>
              <Slider defaultValue={[risk]} min={0} max={100} onValueChange={(v)=>setRisk(v[0])} />
            </div>
            <div className="flex gap-2">
              <Button variant={compare==='fin'?'hero':'outline'} onClick={()=>setCompare('fin')}>Financial view</Button>
              <Button variant={compare==='impact'?'hero':'outline'} onClick={()=>setCompare('impact')}>Impact view</Button>
            </div>
            <div className="text-xs text-muted-foreground">Educational simulation only • No transactions executed • Not investment advice.</div>
          </CardContent>
        </Card>

        <SheepPlaceholder />
      </section>
    </AppLayout>
  );
};

export default InvestPage;
