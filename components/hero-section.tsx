"use client"

import Image from "next/image"
import { PascalCodeBlock } from "./pascal-code-block"

export function HeroSection() {
  const heroCode = `program BlazePastel;
{ A tribute to the genius of Blaise Pascal }

uses
  Mathematics, Philosophy, Physics, Faith;

const
  BIRTH_YEAR = 1623;
  DEATH_YEAR = 1662;
  LEGACY = 'Eternal';

begin
  writeln('Welcome to Blaze Pastel');
  writeln('The story of a brilliant mind');
end.`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/blaise-pascal.jpg"
          alt="Portrait of Blaise Pascal"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-primary">Blaze</span>{" "}
            <span className="text-accent">Pastel</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 text-balance">
            A celebration of Blaise Pascal — mathematician, physicist, philosopher, 
            and the inspiration behind one of computing&apos;s most beloved languages.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-mono text-sm">
              1623 - 1662
            </span>
            <span className="px-4 py-2 bg-accent/20 text-accent rounded-lg font-mono text-sm">
              Mathematician
            </span>
            <span className="px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-lg font-mono text-sm">
              Philosopher
            </span>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <PascalCodeBlock code={heroCode} title="BlazePastel.pas" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
