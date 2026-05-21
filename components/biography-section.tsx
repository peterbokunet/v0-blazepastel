"use client"

import { PascalCodeBlock } from "./pascal-code-block"

export function BiographySection() {
  const earlyLifeCode = `procedure EarlyLife;
{ Born in Clermont-Ferrand, France }
var
  BirthDate: TDate;
  Father: string;
  Siblings: array[1..3] of string;
begin
  BirthDate := '19 June 1623';
  Father := 'Etienne Pascal';
  Siblings[1] := 'Gilberte';
  Siblings[2] := 'Jacqueline';
  
  { Mother died when Blaise was 3 }
  writeln('Raised by father, a tax commissioner');
  writeln('and talented mathematician himself');
  
  { A child prodigy emerges }
  if Age = 12 then
    DiscoverGeometry(Independently);
  if Age = 16 then
    WriteTheorem('Projective Geometry');
end;`

  const achievementsCode = `function ListAchievements: TStringList;
{ The remarkable works of Pascal }
begin
  Result := TStringList.Create;
  
  { Mathematics }
  Result.Add('Pascals Triangle');
  Result.Add('Probability Theory');
  Result.Add('Projective Geometry');
  
  { Physics }
  Result.Add('Pascals Law of Pressure');
  Result.Add('Studies on Vacuum');
  Result.Add('Atmospheric Pressure');
  
  { Inventions }
  Result.Add('Pascaline Calculator');
  Result.Add('Roulette Machine');
  Result.Add('Public Transportation');
  
  { Philosophy & Theology }
  Result.Add('Pensees');
  Result.Add('Provincial Letters');
  Result.Add('Pascals Wager');
end;`

  return (
    <section id="biography" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="pascal-keyword">procedure</span>{" "}
            <span className="text-foreground">TheBiography</span>;
          </h2>
          <p className="text-lg text-muted-foreground">
            Blaise Pascal lived only 39 years, yet his contributions to mathematics, 
            physics, and philosophy continue to shape our world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Early Life & Education</h3>
            <PascalCodeBlock code={earlyLifeCode} title="early_life.pas" />
            <div className="mt-6 p-6 bg-muted/30 rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed">
                Born to Etienne Pascal, a local judge and tax commissioner with scientific 
                interests, Blaise was a child prodigy. By age 12, he had independently 
                discovered that the sum of the angles of a triangle equals 180 degrees. 
                At 16, he wrote a significant treatise on projective geometry, establishing 
                what is now known as Pascal&apos;s theorem.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Major Achievements</h3>
            <PascalCodeBlock code={achievementsCode} title="achievements.pas" />
            <div className="mt-6 p-6 bg-muted/30 rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed">
                Pascal&apos;s contributions span an incredible breadth. He invented one of 
                the first mechanical calculators (the Pascaline), laid foundations for 
                probability theory with Fermat, established principles of fluid dynamics, 
                and wrote profound philosophical works that still resonate today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
