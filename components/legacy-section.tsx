"use client"

import { PascalCodeBlock } from "./pascal-code-block"

export function LegacySection() {
  const legacyCode = `program PascalsLegacy;
{ The enduring impact of one man }

const
  PASCALS_LAW = 'Pressure applied to confined';
  PASCAL_UNIT = 'Pa (N/m2)';
  PASCALS_TRIANGLE = 'Binomial coefficients';
  PASCALS_WAGER = 'Reason to believe';

var
  Impact: TStringList;
  
begin
  writeln('In Physics:');
  writeln('  The Pascal (Pa) unit of pressure');
  writeln('  Pascals Law of fluid mechanics');
  
  writeln('In Mathematics:');
  writeln('  Pascals Triangle');
  writeln('  Probability Theory foundations');
  writeln('  Projective Geometry');
  
  writeln('In Computing:');
  writeln('  The Pascal programming language');
  writeln('  Concept of the calculator');
  
  writeln('In Philosophy:');
  writeln('  Pascals Wager');
  writeln('  The Pensees');
  
  writeln('In his 39 years, Pascal changed');
  writeln('the world forever.');
end.`

  const quotes = [
    {
      text: "The heart has its reasons which reason knows nothing of.",
      source: "Pensees"
    },
    {
      text: "All of humanity's problems stem from man's inability to sit quietly in a room alone.",
      source: "Pensees"
    },
    {
      text: "Man is but a reed, the most feeble thing in nature; but he is a thinking reed.",
      source: "Pensees"
    },
    {
      text: "The eternal silence of these infinite spaces frightens me.",
      source: "Pensees"
    }
  ]

  return (
    <section id="legacy" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="pascal-keyword">const</span>{" "}
            <span className="text-foreground">LEGACY</span> ={" "}
            <span className="pascal-string">&apos;Eternal&apos;</span>;
          </h2>
          <p className="text-lg text-muted-foreground">
            From the SI unit of pressure to probability theory, Pascal&apos;s name 
            echoes through science, mathematics, philosophy, and computing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div>
            <PascalCodeBlock code={legacyCode} title="legacy.pas" />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-primary">Famous Quotes</h3>
            {quotes.map((quote, index) => (
              <blockquote
                key={index}
                className="p-4 border-l-4 border-accent bg-card/50 rounded-r-lg"
              >
                <p className="italic text-foreground mb-2">&ldquo;{quote.text}&rdquo;</p>
                <cite className="text-sm text-muted-foreground font-mono">
                  {`{ Source: '${quote.source}' }`}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Named After Pascal */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="pascal-keyword">type</span>{" "}
            <span className="pascal-type">TNamedAfterPascal</span> = <span className="pascal-keyword">record</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "Pa", title: "Pascal (Unit)", desc: "SI unit of pressure" },
              { icon: "△", title: "Pascal's Triangle", desc: "Binomial coefficients" },
              { icon: "∿", title: "Pascal's Law", desc: "Fluid mechanics" },
              { icon: "</>", title: "Pascal Language", desc: "Programming" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border border-border bg-gradient-to-br from-card to-muted/30 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3 text-primary font-mono">{item.icon}</div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
