import { NavLink } from "react-router-dom";
import { Home, Wallet, LineChart, BookOpen, UserRound } from "lucide-react";

const Item = ({ to, label, Icon }: { to: string; label: string; Icon: any }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex-1 flex flex-col items-center justify-center py-2 text-xs ${
        isActive ? 'text-primary' : 'text-muted-foreground'
      }`
    }
    aria-label={label}
  >
    <Icon className="h-5 w-5 mb-1" />
    <span>{label}</span>
  </NavLink>
);

export const MobileTabBar = () => {
  return (
    <nav className="sticky bottom-0 inset-x-0 z-40 border-t border-white/10 bg-background/80 backdrop-blur">
      <div className="max-w-screen-sm mx-auto flex px-2">
        <Item to="/dashboard" label="Home" Icon={Home} />
        <Item to="/budget" label="Budget" Icon={Wallet} />
        <Item to="/invest" label="Invest" Icon={LineChart} />
        <Item to="/learn" label="Learn" Icon={BookOpen} />
        <Item to="/profile" label="Profile" Icon={UserRound} />
      </div>
    </nav>
  );
};
