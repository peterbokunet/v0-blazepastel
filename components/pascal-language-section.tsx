"use client"

import { PascalCodeBlock } from "./pascal-code-block"

export function PascalLanguageSection() {
  const pascalOriginCode = `program PascalLanguageHistory;
{ Created by Niklaus Wirth, 1970 }

uses
  ETHZurich, Education, StructuredProgramming;

const
  CREATOR = 'Niklaus Wirth';
  BIRTH_YEAR = 1970;
  NAMED_AFTER = 'Blaise Pascal';

var
  Purpose: string;
  
begin
  Purpose := 'Teaching structured programming';
  
  writeln('Pascal was designed to encourage');
  writeln('good programming practices using');
  writeln('structured programming and data');
  writeln('structuring.');
end.`

  const turboPascalCode = `unit TurboPascalEra;
{ Borland Turbo Pascal, 1983-1995 }

interface
  
type
  TPascalVersion = record
    Name: string;
    Year: Integer;
    Innovation: string;
  end;

implementation

procedure DescribeTurboPascal;
var
  Turbo: TPascalVersion;
begin
  Turbo.Name := 'Turbo Pascal';
  Turbo.Year := 1983;
  Turbo.Innovation := 'Fast compilation';
  
  writeln('Borland revolutionized Pascal');
  writeln('with integrated IDE and speed');
  writeln('that made it a favorite among');
  writeln('DOS and early Windows developers');
end;

end.`

  const delphiCode = `unit ModernPascal;
{ Object Pascal and Delphi }

interface

uses
  VCL.Forms, VCL.Controls;

type
  TModernPascal = class(TProgrammingLanguage)
  private
    FName: string;
    FYear: Integer;
  public
    constructor Create;
    procedure Describe;
    property Name: string read FName;
  end;

implementation

constructor TModernPascal.Create;
begin
  inherited;
  FName := 'Delphi / Object Pascal';
  FYear := 1995;
end;

procedure TModernPascal.Describe;
begin
  writeln('Delphi brought OOP to Pascal');
  writeln('RAD development, VCL framework');
  writeln('Still actively developed today');
  writeln('Free Pascal keeps spirit alive');
end;

end.`

  const variants = [
    { name: "Standard Pascal", year: 1970, desc: "Original by Niklaus Wirth" },
    { name: "UCSD Pascal", year: 1978, desc: "P-code virtual machine" },
    { name: "Turbo Pascal", year: 1983, desc: "Borland's fast compiler" },
    { name: "Object Pascal", year: 1986, desc: "OOP extension by Apple" },
    { name: "Delphi", year: 1995, desc: "RAD for Windows" },
    { name: "Free Pascal", year: 1997, desc: "Open source, cross-platform" },
    { name: "Lazarus", year: 1999, desc: "Free Delphi alternative" },
  ]

  return (
    <section id="language" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="pascal-keyword">unit</span>{" "}
            <span className="pascal-type">PascalProgrammingLanguage</span>;
          </h2>
          <p className="text-lg text-muted-foreground">
            Named in honor of Blaise Pascal, the programming language that taught 
            generations of programmers the art of structured code.
          </p>
        </div>

        {/* Origin Story */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">The Birth of Pascal</h3>
            <PascalCodeBlock code={pascalOriginCode} title="history.pas" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <h4 className="text-xl font-bold mb-4">Created for Education</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 1970, Swiss computer scientist <strong className="text-foreground">Niklaus Wirth</strong> created 
                Pascal at ETH Zurich. He named it after Blaise Pascal in recognition of 
                the mathematician&apos;s early work on mechanical calculators.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pascal was designed as a teaching language that enforced good programming 
                habits: strong typing, structured control flow, and clear syntax. It became 
                the standard for computer science education throughout the 1970s and 1980s.
              </p>
            </div>
          </div>
        </div>

        {/* Turbo Pascal Era */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <h4 className="text-xl font-bold mb-4">The Turbo Revolution</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 1983, <strong className="text-foreground">Borland</strong> released Turbo Pascal, 
                which changed everything. Its blazing-fast compilation speed and integrated 
                development environment made it incredibly popular.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Turbo Pascal proved that Pascal wasn&apos;t just for teaching — it could be used 
                for serious software development. Games, utilities, and business applications 
                were all built with Turbo Pascal.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4 text-accent">The Turbo Era</h3>
            <PascalCodeBlock code={turboPascalCode} title="turbo.pas" />
          </div>
        </div>

        {/* Modern Pascal */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">Modern Pascal</h3>
            <PascalCodeBlock code={delphiCode} title="modern.pas" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <h4 className="text-xl font-bold mb-4">Delphi and Beyond</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 1995, Borland released <strong className="text-foreground">Delphi</strong>, 
                bringing object-oriented programming and rapid application development to Pascal. 
                It became one of the most productive environments for Windows development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Pascal lives on through <strong className="text-foreground">Free Pascal</strong> and 
                <strong className="text-foreground"> Lazarus</strong>, open-source projects that keep 
                the language accessible and cross-platform.
              </p>
            </div>
          </div>
        </div>

        {/* Pascal Variants */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="pascal-keyword">array</span>[<span className="pascal-number">1</span>..<span className="pascal-number">7</span>] <span className="pascal-keyword">of</span> <span className="pascal-type">TPascalVariant</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {variants.map((variant, index) => (
              <div
                key={variant.name}
                className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
              >
                <div className="font-mono text-xs text-muted-foreground mb-2">
                  Variants[<span className="pascal-number">{index + 1}</span>] :=
                </div>
                <h4 className="font-bold text-primary mb-1">{variant.name}</h4>
                <div className="text-sm text-muted-foreground">
                  <span className="pascal-number">{variant.year}</span> — {variant.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
