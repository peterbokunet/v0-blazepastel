"use client"

import { useState } from "react"

interface TimelineEvent {
  year: number
  title: string
  description: string
  category: "life" | "math" | "physics" | "philosophy"
}

const events: TimelineEvent[] = [
  {
    year: 1623,
    title: "Birth",
    description: "Born on June 19 in Clermont-Ferrand, France",
    category: "life"
  },
  {
    year: 1631,
    title: "Move to Paris",
    description: "Family relocates to Paris; Etienne dedicates himself to educating Blaise",
    category: "life"
  },
  {
    year: 1635,
    title: "Geometry Discovery",
    description: "At age 12, independently discovers Euclid's 32nd proposition",
    category: "math"
  },
  {
    year: 1639,
    title: "Pascal's Theorem",
    description: "At 16, writes 'Essay on Conics' introducing Pascal's theorem",
    category: "math"
  },
  {
    year: 1642,
    title: "Pascaline Invented",
    description: "Begins work on the mechanical calculator to help his father with taxes",
    category: "math"
  },
  {
    year: 1646,
    title: "Religious Conversion",
    description: "First conversion to Jansenism after father's accident",
    category: "philosophy"
  },
  {
    year: 1647,
    title: "Vacuum Experiments",
    description: "Conducts experiments proving the existence of vacuum",
    category: "physics"
  },
  {
    year: 1648,
    title: "Puy-de-Dôme Experiment",
    description: "Famous experiment proving atmospheric pressure varies with altitude",
    category: "physics"
  },
  {
    year: 1654,
    title: "Probability Theory",
    description: "Correspondence with Fermat lays foundation for probability theory",
    category: "math"
  },
  {
    year: 1654,
    title: "Night of Fire",
    description: "Profound religious experience leads to definitive conversion",
    category: "philosophy"
  },
  {
    year: 1656,
    title: "Provincial Letters",
    description: "Publishes 'Lettres provinciales' defending Jansenism",
    category: "philosophy"
  },
  {
    year: 1658,
    title: "Cycloid Studies",
    description: "Solves problems of the cycloid, advancing calculus",
    category: "math"
  },
  {
    year: 1662,
    title: "Death",
    description: "Dies on August 19 in Paris at age 39",
    category: "life"
  }
]

const categoryColors = {
  life: "bg-muted text-muted-foreground border-muted-foreground/30",
  math: "bg-primary/20 text-primary border-primary/30",
  physics: "bg-accent/20 text-accent border-accent/30",
  philosophy: "bg-secondary text-secondary-foreground border-secondary-foreground/30"
}

export function TimelineSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(e => e.category === activeFilter)

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="pascal-keyword">for</span>{" "}
            <span className="pascal-number">1623</span>{" "}
            <span className="pascal-keyword">to</span>{" "}
            <span className="pascal-number">1662</span>{" "}
            <span className="pascal-keyword">do</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A chronological journey through the life and works of Pascal
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "life", "math", "physics", "philosophy"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {filter === "all" ? "ShowAll()" : `Filter('${filter}')`}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {filteredEvents.map((event, index) => (
              <div
                key={`${event.year}-${event.title}`}
                className={`relative flex items-start gap-6 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year marker */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`p-4 rounded-lg border ${categoryColors[event.category]}`}>
                    <div className="font-mono text-sm mb-1 opacity-80">
                      Year := <span className="pascal-number">{event.year}</span>;
                    </div>
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <p className="text-sm opacity-80">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
