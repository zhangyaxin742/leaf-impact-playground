import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ThemeToggle } from '@/components/ThemeToggle';

const ProfilePage = () => {
  return (
    <AppLayout>
      <section className="space-y-4">
        <Card className="bg-card/60 border-white/10">
          <CardHeader><CardTitle className="text-base">Personal</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-1 gap-3">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">2FA</span>
              <Switch />
            </div>
            <ThemeToggle />
          </CardContent>
        </Card>

        <Card className="bg-card/60 border-white/10">
          <CardHeader><CardTitle className="text-base">Notifications</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {['goal hit','bill due','low balance','lesson reminders'].map((n)=> (
              <div key={n} className="flex items-center justify-between text-sm">
                <span>{n}</span>
                <Switch />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </AppLayout>
  );
};

export default ProfilePage;
