// Brand tokens for Leaf.io - sampled to match provided logos
// HSL only; keep in sync with CSS variables in src/index.css

export const brand = {
  colors: {
    leafGreen: '137 79% 54%',
    leafTeal: '199 70% 40%',
    backgroundDark: '195 50% 7%',
    cardDark: '195 45% 9%',
    textOnDark: '210 40% 98%',
  },
  gradients: {
    primary: 'linear-gradient(135deg, hsl(137 79% 54%), hsl(199 70% 40%))',
  },
  radii: {
    lg: '1.25rem',
  },
  shadows: {
    glow: '0 0 40px hsl(137 79% 54% / 0.35)',
    elev1: '0 8px 24px hsl(199 70% 40% / 0.25)',
  },
};

export type Brand = typeof brand;
