import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAppState } from '@/state/AppState';

const values = ['Climate Action','Clean Water','Renewable Energy','Food Systems','Natural Capital','Resilience'];
const avoids = ['Fossil Fuels','Weapons','Tobacco','Gambling'];

const Step = ({ children }:{ children: React.ReactNode }) => (
  <Card className="bg-card/60 border-white/10">
    <CardContent className="p-4 space-y-4">{children}</CardContent>
  </Card>
);

const Onboarding = () => {
  const { setUser, setBudget, completeOnboarding } = useAppState();
  const [step, setStep] = useState(0);
  const [u18, setU18] = useState(false);
  const [form, setForm] = useState({ income: 2400, bills: 1800, weekly: 20, risk: 50, values: [] as string[], avoids: [] as string[] });
  const nav = useNavigate();
  
  console.log('Onboarding component rendered, step:', step, 'form:', form);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => Math.max(0, s - 1));
  const finish = () => {
    setUser({ values: form.values, avoids: form.avoids, riskLevel: form.risk });
    setBudget({ income: form.income });
    completeOnboarding();
    nav('/dashboard');
console.log("Onboarding render"); 
  };

  return (
    <AppLayout>
      <h1 className="font-display text-2xl mb-3 text-gradient-primary">Welcome to Leaf.io</h1>
      <p className="text-muted-foreground mb-4">Budget. Learn. Sim your impact.</p>

      {step === 0 && (
        <Step>
          <div className="space-y-3">
            <p className="text-sm">Age and consent</p>
            <div className="flex items-center gap-2">
              <Checkbox id="consent" />
              <Label htmlFor="consent">I agree to the educational use terms</Label>
            </div>
            <div className="flex items-center justify-between">
              <Label>Under 18?</Label>
              <Switch checked={u18} onCheckedChange={(v)=>setU18(!!v)} />
            </div>
            {u18 && (
              <div>
                <Label htmlFor="guardian">Parent/guardian email (optional)</Label>
                <Input id="guardian" placeholder="name@example.com" />
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="hero" className="flex-1" onClick={next}>Get started</Button>
          </div>
        </Step>
      )}

      {step === 1 && (
        <Step>
          <p className="text-sm">Pick your goals & values</p>
          <div className="grid grid-cols-2 gap-2">
            {values.map(v => (
              <button key={v} onClick={()=>setForm(f=>({ ...f, values: f.values.includes(v) ? f.values.filter(x=>x!==v) : [...f.values, v] }))} className={`rounded-lg border px-3 py-2 text-sm ${form.values.includes(v) ? 'bg-gradient-primary text-white' : 'bg-white/5 border-white/10'}`}>{v}</button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={prev}>Back</Button>
            <Button variant="hero" className="flex-1" onClick={next}>Next</Button>
          </div>
        </Step>
      )}

      {step === 2 && (
        <Step>
          <p className="text-sm">Anything to avoid?</p>
          <div className="flex flex-wrap gap-2">
            {avoids.map(v => (
              <button key={v} onClick={()=>setForm(f=>({ ...f, avoids: f.avoids.includes(v) ? f.avoids.filter(x=>x!==v) : [...f.avoids, v] }))} className={`rounded-full border px-3 py-1 text-xs ${form.avoids.includes(v) ? 'bg-gradient-primary text-white' : 'bg-white/5 border-white/10'}`}>{v}</button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={prev}>Back</Button>
            <Button variant="hero" className="flex-1" onClick={next}>Next</Button>
          </div>
        </Step>
      )}

      {step === 3 && (
        <Step>
          <p className="text-sm">Risk & style</p>
          <Label className="text-xs mb-1 block">Risk level</Label>
          <Slider defaultValue={[form.risk]} onValueChange={(v)=>setForm(f=>({ ...f, risk: v[0] }))} min={0} max={100} step={1} />
          <div className="text-xs text-muted-foreground">Cautious → Adventurous</div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={prev}>Back</Button>
            <Button variant="hero" className="flex-1" onClick={next}>Next</Button>
          </div>
        </Step>
      )}

      {step === 4 && (
        <Step>
          <p className="text-sm">Budget setup</p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="income">Monthly income</Label>
              <Input id="income" type="number" value={form.income} onChange={(e)=>setForm(f=>({ ...f, income: Number(e.target.value) }))} />
            </div>
            <div>
              <Label htmlFor="bills">Recurring bills</Label>
              <Input id="bills" type="number" value={form.bills} onChange={(e)=>setForm(f=>({ ...f, bills: Number(e.target.value) }))} />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={prev}>Back</Button>
            <Button variant="hero" className="flex-1" onClick={next}>Next</Button>
          </div>
        </Step>
      )}

      {step === 5 && (
        <Step>
          <p className="text-sm">Notification preferences</p>
          <div className="space-y-2">
            {['goal hits','bill reminders','low balance','learning streaks'].map((n)=> (
              <div key={n} className="flex items-center gap-2">
                <Checkbox id={n} />
                <Label htmlFor={n}>{n}</Label>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={prev}>Back</Button>
            <Button variant="hero" className="flex-1" onClick={finish}>Finish</Button>
          </div>
        </Step>
      )}
    </AppLayout> 
  ); 
}

export default Onboarding;
