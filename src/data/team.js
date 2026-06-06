/* ===========================================================================
   TEAM ROSTER — placeholders. TODO: replace names, roles, and photos with the
   real roster. Drop photos in /public/team/ and set `photo` to e.g.
   '/team/jordan.jpg'. Leave `photo` null to render the styled avatar fallback.
   =========================================================================== */

export const MEMBERS = [
  { name: 'Team Member 1', role: 'Build', initials: 'M1', photo: null },
  { name: 'Team Member 2', role: 'Programming', initials: 'M2', photo: null },
  { name: 'Team Member 3', role: 'CAD', initials: 'M3', photo: null },
  { name: 'Team Member 4', role: 'Outreach', initials: 'M4', photo: null },
  { name: 'Team Member 5', role: 'Business', initials: 'M5', photo: null },
  { name: 'Team Member 6', role: 'Build', initials: 'M6', photo: null },
  { name: 'Team Member 7', role: 'Programming', initials: 'M7', photo: null },
  { name: 'Team Member 8', role: 'Outreach', initials: 'M8', photo: null },
]

export const MENTORS = [
  { name: 'Head Coach', role: 'Lead Mentor', initials: 'HC', photo: null },
  { name: 'Mentor', role: 'Engineering Mentor', initials: 'EM', photo: null },
  { name: 'Mentor', role: 'Business & Outreach', initials: 'BO', photo: null },
]

/* Color accent per role chip — keeps the grid lively but on-palette. */
export const ROLE_STYLES = {
  Build: 'bg-blue/15 text-azure',
  Programming: 'bg-deep/10 text-deep',
  CAD: 'bg-glow/30 text-azure',
  Outreach: 'bg-powder text-deep',
  Business: 'bg-azure/15 text-azure',
  'Lead Mentor': 'bg-deep/10 text-deep',
  'Engineering Mentor': 'bg-blue/15 text-azure',
  'Business & Outreach': 'bg-powder text-deep',
}
