export type User = { id: string; name: string; ageBracket: 'u18'|'18-24'|'25-34'|'35+'; region: string; currency: string; riskLevel: number; values: string[]; avoids: string[]; notifPrefs: string[] };
export type Budget = { income: number; categories: { name: string; cap: number; spent: number }[] };
export type Transaction = { id: string; date: string; merchant: string; amount: number; category: string; recurring?: boolean };
export type ImpactTheme = { id: string; name: string; sdgs: number[]; description: string; projects: Project[] };
export type Project = { id: string; name: string; region: string; blurb: string; verification: string; estImpact: string; caseStudy?: string };
export type SimPortfolio = { id: string; themes: string[]; weeklyAmount: number; risk: number; mockReturnSeries: number[]; mockImpactSeries: number[] };

export const mockUser: User = {
  id: 'u1', name: 'Leafie', ageBracket: '18-24', region: 'US', currency: 'USD', riskLevel: 50,
  values: ['Renewable Energy', 'Resilience'], avoids: ['Fossil Fuels'], notifPrefs: ['goal','bill','lesson']
};

export const mockBudget: Budget = {
  income: 2400,
  categories: [
    { name: 'Needs', cap: 1200, spent: 860 },
    { name: 'Wants', cap: 600, spent: 420 },
    { name: 'Savings', cap: 360, spent: 180 },
    { name: 'Climate', cap: 240, spent: 60 },
  ],
};

export const mockSpark = Array.from({ length: 12 }, (_, i) => ({ value: 40 + Math.sin(i) * 10 + i }));

export const mockThemes: ImpactTheme[] = [
  { id: 'renew', name: 'Renewables', sdgs: [7,13], description: 'Clean energy generation and storage.', projects: [] },
  { id: 'res', name: 'Resilience', sdgs: [11,13], description: 'Climate adaptation & resilient infra.', projects: [] },
  { id: 'water', name: 'Water', sdgs: [6], description: 'Clean water access and treatment.', projects: [] },
];

// Stubbed API calls
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const api = {
  saveBudget: async (b: Budget) => { await delay(300); return b; },
  saveUser: async (u: User) => { await delay(300); return u; },
  simulatePortfolio: async (p: SimPortfolio) => { await delay(300); return { ...p, mockReturnSeries: Array.from({length:24},(_,i)=>i* (1+p.risk/400) ), mockImpactSeries: Array.from({length:24},(_,i)=>i* (1+p.weeklyAmount/50)) }; }
};
