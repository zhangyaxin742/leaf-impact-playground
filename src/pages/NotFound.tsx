import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-sm text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-flex px-4 h-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">Return to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
