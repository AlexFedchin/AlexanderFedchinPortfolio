/**
 * Backdrop — the global, fixed background that sits behind the entire page.
 * Layers: deep-black base → drifting cyan glow blobs → grid pattern that fades
 * out radially → fine film grain. Purely decorative.
 */
const Backdrop = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
    {/* radial vignette base */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 80% at 50% -10%, hsl(220 12% 11%) 0%, hsl(240 6% 4%) 55%)",
      }}
    />

    {/* drifting cyan glows — the only colour on the page */}
    <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[140px] animate-float-slow" />
    <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-accent/[0.05] blur-[150px] animate-pulse-glow" />
    <div className="absolute bottom-0 -left-40 h-[36rem] w-[36rem] rounded-full bg-white/[0.03] blur-[150px] animate-float-slow" />

    {/* grid pattern, faded toward the edges */}
    <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70" />

    {/* film grain */}
    <div className="noise absolute inset-0 opacity-[0.18] mix-blend-soft-light" />
  </div>
);

export default Backdrop;
