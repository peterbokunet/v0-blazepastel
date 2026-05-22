"use client"

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Pascal-style footer */}
          <div className="font-mono text-sm text-muted-foreground text-center space-y-2 mb-8">
            <p className="pascal-comment">{"{ End of program BlazePastel }"}</p>
            <p>
              <span className="pascal-keyword">writeln</span>(
              <span className="pascal-string">&apos;Thank you for visiting&apos;</span>);
            </p>
            <p>
              <span className="pascal-keyword">writeln</span>(
              <span className="pascal-string">&apos;Honoring the memory of Blaise Pascal&apos;</span>);
            </p>
            <p>
              <span className="pascal-keyword">writeln</span>(
              <span className="pascal-string">&apos;1623 - 1662&apos;</span>);
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#biography" className="text-muted-foreground hover:text-primary transition-colors">
              Biography
            </a>
            <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">
              Timeline
            </a>
            <a href="#language" className="text-muted-foreground hover:text-primary transition-colors">
              Pascal Language
            </a>
            <a href="#legacy" className="text-muted-foreground hover:text-primary transition-colors">
              Legacy
            </a>
          </div>

          {/* Credits */}
          <div className="text-center text-xs text-muted-foreground">
            <p className="mb-2">
              <span className="pascal-keyword">program</span>{" "}
              <span className="text-foreground">BlazePastel</span>;
            </p>
            <p className="pascal-comment">
              {"{ Styled in bold pastels | Written in the spirit of Pascal }"}
            </p>
          </div>

          {/* End statement */}
          <div className="mt-8 text-center">
            <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-lg font-mono text-lg font-bold">
              end.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
