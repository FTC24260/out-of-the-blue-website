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

  // Real team facts (confirmed by the team, Sept 2026).
  yearsTogether: 4, // Currently in our fourth season.
  memberCount: 11, // 11 students on the team.
  sisterTeams: 3, // 3 sister teams under Biome Robotics.
  seasonsCompleted: 3, // 2023, 2024, 2025 — the 4th season is underway.

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
    href: 'https://www.instagram.com/outoftheblueftc/',
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
    href: 'https://ftc-events.firstinspires.org/team/24260',
    icon: 'trophy',
  },
]

/* --- Navigation -----------------------------------------------------------
   The site is routed now, not one long scroll. '/' is the Out Of the Blue
   story end to end; everything else lives on its own page. */
export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/team', label: 'Team' },
  { to: '/awards', label: 'Awards' },
  { to: '/outreach', label: 'Outreach' },
  { to: '/media', label: 'Media' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contact', label: 'Contact' },
]
