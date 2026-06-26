import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Backdrop from "@/components/primitives/Backdrop";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <Backdrop />
      <div className="text-center">
        <p className="eyebrow mb-6">Error 404</p>
        <h1 className="font-display text-[clamp(4rem,18vw,11rem)] font-bold leading-none text-gradient">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          This page drifted off into the void. Let's get you back on track.
        </p>
        <a
          href="/"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-200 hover:shadow-[0_0_28px_-6px_hsl(var(--accent)/0.6)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
