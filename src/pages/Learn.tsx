import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const lessons = [
  { title: 'Impact vs ESG (why labels are messy)', blurb: 'Simple definitions and real differences.' },
  { title: 'What is a green bond?', blurb: 'Debt that finances climate-positive projects.' },
  { title: 'SDG 8, 13, 17 in plain English', blurb: 'Jobs, climate, and partnerships.' },
  { title: "Why we don't do offsets", blurb: 'We prefer direct/project finance.' },
];

const LearnPage = () => {
  return (
    <AppLayout>
      <section className="space-y-3">
        {lessons.map((l) => (
          <Card key={l.title} className="bg-card/60 border-white/10">
            <CardHeader><CardTitle className="text-base">{l.title}</CardTitle></CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">{l.blurb}</div>
              <Button variant="hero">30-sec lesson</Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </AppLayout>
  );
};

export default LearnPage;
