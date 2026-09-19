/* ===========================================================================
   COMPETITION RECORD — transcribed from the official FIRST results at
   https://ftc-events.firstinspires.org/team/24260

   13 entries across three completed seasons: 8 judged awards and 5 alliance
   finishes. `judged: false` marks an alliance placement, which is an on-field
   result rather than an award from the judges — the Awards page counts and
   labels the two separately so neither is overstated.

   TODO: append season 2026 results as they happen, and keep the totals in
   STATS (src/data/content.js) in step.
   =========================================================================== */

export const AWARD_SEASONS = [
  {
    season: '2025',
    game: 'DECODE',
    events: [
      {
        event: 'Pinnacle Classical Academy Qualifier 2',
        results: [
          { title: 'Innovate Award sponsored by RTX', judged: true },
          { title: 'Finalist Alliance - Captain', judged: false },
        ],
      },
      {
        event: 'Southeast Guilford High School Qualifier 2',
        results: [{ title: 'Inspire Award 3rd Place', judged: true }],
      },
      {
        event: 'North Carolina Championship',
        results: [{ title: 'Design Award', judged: true }],
      },
      {
        event: 'Michiana Premier Event - Jones',
        results: [{ title: 'Connect Award', judged: true }],
      },
    ],
  },
  {
    season: '2024',
    game: 'INTO THE DEEP',
    events: [
      {
        event: 'Contentnea-Savannah K-8 School',
        results: [
          { title: 'Motivate Award', judged: true },
          { title: 'Winning Alliance - 1st Team Selected', judged: false },
        ],
      },
      {
        event: 'Westover High School',
        results: [
          { title: 'Motivate Award', judged: true },
          { title: 'Finalist Alliance - Captain', judged: false },
        ],
      },
      { event: 'North Carolina Championship', results: [] },
    ],
  },
  {
    season: '2023',
    game: 'CENTERSTAGE',
    events: [
      {
        event: 'NC FTC Islamic Association of Raleigh',
        results: [
          { title: 'Compass Award', judged: true },
          { title: 'Control Award 2nd Place', judged: true },
          { title: 'Finalist Alliance - Captain', judged: false },
        ],
      },
      {
        event: 'NC FTC Thales Academy',
        results: [{ title: 'Finalist Alliance - 2nd Team Selected', judged: false }],
      },
      { event: 'North Carolina FTC State Championship', results: [] },
    ],
  },
]

/* Derived so the page can never drift from the list above. */
export const ALL_RESULTS = AWARD_SEASONS.flatMap((s) =>
  s.events.flatMap((e) => e.results),
)
export const JUDGED_COUNT = ALL_RESULTS.filter((r) => r.judged).length
export const ALLIANCE_COUNT = ALL_RESULTS.length - JUDGED_COUNT
