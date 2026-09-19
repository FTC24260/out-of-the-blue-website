/* ===========================================================================
   PAGE CONTENT — copy + structured data for Achievements stats and Sponsor
   tiers.
   =========================================================================== */

/* --- Achievements stats ---------------------------------------------------
   Confirmed by the team. (Outreach count is for the current season.)

   Competition numbers below are pulled from the official FIRST record at
   https://ftc-events.firstinspires.org/team/24260 :
     - 13 awards + alliance honors across 2023, 2024 and 2025
       (8 judged awards: Innovate, Inspire 3rd, Design, Connect, Motivate x2,
        Compass, Control 2nd — plus 5 alliance finishes)
     - 3 of 3 *completed* seasons ended at the NC State Championship (100%).
       Season four is under way, so the label says "completed seasons" — do
       not let it read as 4 of 4.
   TODO: re-check these after each event and update alongside FTC Events. */
export const STATS = [
  { value: 4, label: 'Seasons as a team' },
  { value: 13, label: 'Awards won' },
  { value: 100, suffix: '%', label: 'Completed seasons at State' },
  { value: 16, label: 'Outreaches this season' },
  { value: 11, label: 'Team members' },
  { value: 3, label: 'Sister teams' },
]

/* --- Sponsor logo wall ----------------------------------------------------
   Logos live in public/sponsors/ as trimmed, transparent PNGs. Regenerate one
   with the scratchpad's make_sponsor_logo.py; pass --white-holes for files
   that were keyed for a white page (Gene Haas and TE Connectivity arrived that
   way — every white element was a transparent hole that only looked white
   because the page behind it was, so on navy they went navy).

   `plate: true` puts the logo on a light rounded panel. It is for marks whose
   own colours die on the navy: measured against #0a1b30, Gene Haas is 39%
   black at 1.21:1, Biome 94% near-black at 1.1:1, and Mellow Mushroom 89%
   dark purple at 1.3:1 — all effectively invisible unbacked. The rest sit
   straight on the page: HPE reversed-white 13.1:1, TE orange 6.0:1, sweetFrog
   pink 3.7:1 plus white, John Deere's yellow deer 12.2:1.

   `rounded: true` clips the image's own corners, for a logo that is already a
   filled block (TE) and so needs matching geometry rather than a panel.

   `scale` is an optical-size knob, not a layout value: object-contain alone
   would let a wide wordmark read far larger than a squarish lockup, and
   strict ink-area parity is wrong too (TE is a solid filled rectangle, so
   parity would shrink it to a stamp). Balanced by eye at the box sizes noted
   below; re-check if the row split or box height changes. */

/* Explicit rows: the order and the 3-then-4 split are a deliberate layout,
   not an accident of wrapping. Each row divides the container evenly, so row
   one's three logos get wider boxes (312px) than row two's four (228px). */
export const SPONSOR_ROWS = [
  [
    {
      name: 'Gene Haas Foundation',
      logo: '/sponsors/gene-haas.png',
      scale: 1,
      plate: true,
    },
    {
      // Its own background is the brand orange, so it needs no plate, just the
      // same corner radius as the plates so the row reads as one set.
      name: 'TE Connectivity',
      logo: '/sponsors/te-connectivity.png',
      scale: 1,
      rounded: true,
    },
    {
      name: 'Biome Robotics',
      logo: '/sponsors/biome.png',
      scale: 1,
      plate: true,
    },
  ],
  [
    { name: 'sweetFrog Holly Springs', logo: '/sponsors/sweetfrog.png', scale: 1 },
    { name: 'HPE', logo: '/sponsors/hpe.png', scale: 1 },
    { name: 'John Deere', logo: '/sponsors/john-deere.png', scale: 1 },
    {
      name: 'Mellow Mushroom',
      logo: '/sponsors/mellow-mushroom.png',
      scale: 1,
      plate: true,
    },
  ],
]

/* Flat list for anything that just needs "who sponsors us". */
export const SPONSORS = SPONSOR_ROWS.flat()

/* --- Sponsor tiers --------------------------------------------------------
   TODO: confirm tier amounts/benefits with the team's sponsorship packet. */
export const SPONSOR_TIERS = [
  {
    // Logo on the team shirt starts at Bronze, so every tier above inherits it
    // through "All <lower> perks" — that's the every-tier promise.
    name: 'Bronze',
    amount: '$250+',
    perks: [
      'Logo on the team shirt',
      'Logo on team banner',
      'Social media thank-you',
      'Season update email',
    ],
  },
  {
    name: 'Silver',
    amount: '$500+',
    perks: ['All Bronze perks', 'Logo on this website', 'Logo on robot cart'],
  },
  {
    name: 'Gold',
    amount: '$1,000+',
    perks: ['All Silver perks', 'Larger shirt logo', 'Shout-out at events'],
    featured: true,
  },
  {
    name: 'Platinum',
    amount: '$2,500+',
    perks: ['All Gold perks', 'Logo on the robot', 'Lab visit & demo'],
  },
]
