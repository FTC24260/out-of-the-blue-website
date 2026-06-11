/* ===========================================================================
   SITE CONFIG — Out Of the Blue · FTC #24260
   ---------------------------------------------------------------------------
   This is the ONE place to swap placeholder content for real team data.
   Anything marked TODO is a placeholder — confirm the real value before going
   live so nothing unverified is presented as fact on the public page.
   =========================================================================== */

export const TEAM = {
  name: 'Out Of the Blue',
  number: '24260',
  wordmark: 'Out Of the Blue',
  program: 'FIRST Tech Challenge (FTC)',
  city: 'Raleigh, NC',
  region: 'Research Triangle Park area',
  parentOrg: 'Biome Robotics',
  parentOrgUrl: 'https://www.biome-robotics.org',
  rookieYear: 2024, // Joined Biome Robotics in 2024 after a strong rookie year.

  // Real team facts (confirmed by the team).
  yearsTogether: 3, // Currently in our third season.
  memberCount: 8, // 8 students on the team.
  girlsPercent: 50, // ~50% of the team are girls.
  sisterTeams: 2, // 2 sister teams under Biome Robotics.

  // Meeting location — The Science House, NC State University.
  meeting: {
    venue: 'The Science House',
    campus: 'Dorothea Dix campus, NC State University',
    address: '715 Barbour Drive, Raleigh, NC',
  },
}

/* --- Contact / links ------------------------------------------------------
   TODO: Replace the placeholder email + social URLs with the team's real
   channels once confirmed. Placeholders are clearly labeled. */
export const CONTACT = {
  // TODO: confirm the team's public contact email.
  email: 'team24260@biome-robotics.org', // PLACEHOLDER
  // Pulled from .env (VITE_DONATE_URL). Falls back to the Biome donate page.
  // TODO: set VITE_DONATE_URL in .env to the real donation link.
  donateUrl:
    import.meta.env.VITE_DONATE_URL || 'https://www.biome-robotics.org/donate',
  // Pulled from .env (VITE_CONTACT_ENDPOINT). Empty => demo mode (no real send).
  // TODO: set VITE_CONTACT_ENDPOINT in .env (Web3Forms key or Formspree URL).
  formEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || '',
}

/* --- Social media ---------------------------------------------------------
   TODO: Replace with the team's confirmed handles/URLs. The Instagram link
   below is a best-guess placeholder pattern — verify before launch. */
export const SOCIALS = [
  {
    label: 'Instagram',
    // TODO: confirm handle — placeholder URL.
    href: 'https://www.instagram.com/',
    icon: 'instagram',
  },
  {
    label: 'Biome Robotics',
    href: 'https://www.biome-robotics.org',
    icon: 'globe',
  },
  {
    label: 'FTCScout',
    href: 'https://ftcscout.org/teams/24260',
    icon: 'bar-chart',
  },
  {
    label: 'FTC Events',
    href: 'https://ftc-events.firstinspires.org',
    icon: 'trophy',
  },
]

/* --- Navigation ----------------------------------------------------------- */
export const NAV_LINKS = [
  { id: 'team', label: 'About & Team' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'join', label: 'Join' },
  { id: 'contact', label: 'Contact' },
]

/* Ids of every scroll-spy section, in document order. */
export const SECTION_IDS = [
  'home',
  'team',
  'achievements',
  'sponsors',
  'join',
  'contact',
]
