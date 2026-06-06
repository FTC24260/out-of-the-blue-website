/* ===========================================================================
   PAGE CONTENT — copy + structured data for Mission, Robot timeline,
   Achievements stats, Outreach, and Sponsor tiers.
   TODO markers note any figures that should be verified against FTCScout /
   FTC Events before launch so nothing unverified is shown as fact.
   =========================================================================== */

/* --- Engineering design process (Robot section timeline) -------------------
   Mirrors the steps in the team's engineering portfolio. */
export const DESIGN_PROCESS = [
  {
    icon: 'lightbulb',
    title: 'Brainstorm',
    body: 'Break down the season challenge and sketch out every idea — no concept is too wild at this stage.',
  },
  {
    icon: 'search',
    title: 'Research',
    body: 'Study the game, scout other teams, and dig into what mechanisms and strategies actually work.',
  },
  {
    icon: 'pencil-ruler',
    title: 'CAD',
    body: 'Model the robot in 3D so every part fits before we cut, drill, or print a single piece.',
  },
  {
    icon: 'wrench',
    title: 'Build',
    body: 'Fabricate, assemble, and wire a robust robot that can survive a full competition day.',
  },
  {
    icon: 'flask-conical',
    title: 'Test',
    body: 'Drive it, push it, and tune autonomous routines — finding the failures before the field does.',
  },
  {
    icon: 'refresh-cw',
    title: 'Iterate',
    body: 'Review what broke, redesign, and go again. The engineering notebook captures every loop.',
  },
]

/* --- Robot quick specs ----------------------------------------------------
   TODO: confirm/replace with the current season's real robot specs. These are
   tasteful placeholders so the section renders cleanly. */
export const ROBOT_SPECS = [
  { label: 'Drivetrain', value: 'Mecanum (TODO confirm)' },
  { label: 'Control', value: 'REV Control Hub' },
  { label: 'Language', value: 'Java / OnBot' },
  { label: 'Build', value: 'Aluminum extrusion' },
]

/* --- Achievements / stat counters -----------------------------------------
   Confirmed by the team. (Outreach count is for the current season.) */
export const STATS = [
  { value: 3, label: 'Seasons as a team', suffix: '' },
  { value: 16, label: 'Outreaches this season', suffix: '' },
  { value: 8, label: 'Team members', suffix: '' },
  { value: 2, label: 'Sister teams', suffix: '' },
]

/* --- Sponsor tiers --------------------------------------------------------
   TODO: confirm tier amounts/benefits with the team's sponsorship packet. */
export const SPONSOR_TIERS = [
  {
    name: 'Bronze',
    amount: '$250+',
    accent: 'from-[#E9C8A0] to-[#CDA06A]',
    perks: ['Logo on team banner', 'Social media thank-you', 'Season update email'],
  },
  {
    name: 'Silver',
    amount: '$500+',
    accent: 'from-[#D6DEE6] to-[#A9B6C2]',
    perks: ['All Bronze perks', 'Logo on this website', 'Logo on robot cart'],
  },
  {
    name: 'Gold',
    amount: '$1,000+',
    accent: 'from-[#F2D98B] to-[#D9B23E]',
    perks: ['All Silver perks', 'Logo on team shirts', 'Shout-out at events'],
    featured: true,
  },
  {
    name: 'Platinum',
    amount: '$2,500+',
    accent: 'from-[#CFE6F5] to-[#8FC4E6]',
    perks: ['All Gold perks', 'Logo on the robot', 'Lab visit & demo'],
  },
]

/* --- Outreach highlights --------------------------------------------------- */
export const OUTREACH_POINTS = [
  {
    icon: 'school',
    title: 'Schools',
    body: 'Hands-on robotics demos and mentoring that show younger students STEM can be theirs.',
  },
  {
    icon: 'library',
    title: 'Libraries & Museums',
    body: 'Public demos and workshops that bring the robot — and the science behind it — to the whole community.',
  },
  {
    icon: 'megaphone',
    title: 'STEM Advocacy',
    body: 'Sharing the FIRST mission at community events and helping new teams get started.',
  },
]
