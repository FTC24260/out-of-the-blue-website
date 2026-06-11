/* ===========================================================================
   PAGE CONTENT — copy + structured data for Achievements stats and Sponsor
   tiers.
   =========================================================================== */

/* --- Achievements stats ---------------------------------------------------
   Confirmed by the team. (Outreach count is for the current season.) */
export const STATS = [
  { value: 3, label: 'Seasons as a team' },
  { value: 16, label: 'Outreaches this season' },
  { value: 8, label: 'Team members' },
  { value: 2, label: 'Sister teams' },
]

/* --- Sponsor tiers --------------------------------------------------------
   TODO: confirm tier amounts/benefits with the team's sponsorship packet. */
export const SPONSOR_TIERS = [
  {
    name: 'Bronze',
    amount: '$250+',
    perks: ['Logo on team banner', 'Social media thank-you', 'Season update email'],
  },
  {
    name: 'Silver',
    amount: '$500+',
    perks: ['All Bronze perks', 'Logo on this website', 'Logo on robot cart'],
  },
  {
    name: 'Gold',
    amount: '$1,000+',
    perks: ['All Silver perks', 'Logo on team shirts', 'Shout-out at events'],
    featured: true,
  },
  {
    name: 'Platinum',
    amount: '$2,500+',
    perks: ['All Gold perks', 'Logo on the robot', 'Lab visit & demo'],
  },
]
