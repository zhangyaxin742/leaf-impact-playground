import { Line, LineChart, ResponsiveContainer } from 'recharts';

export const Sparkline = ({ data }:{ data: { value: number }[] }) => (
  <div className="h-10 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
        <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
