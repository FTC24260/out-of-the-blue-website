/* ===========================================================================
   TEAM ROSTER — 11 students, fourth season (2026-27).

   Eight are named with portraits (member-01..08, shot Sept 2026). Members
   9-11 are still placeholders: TEAM.memberCount says 11 but only eight names
   and faces have been supplied, so the last three render the monogram avatar
   until someone fills them in. Roles for 9-11 are guesses — confirm them.

   Portraits are pre-cropped square to head-and-shoulders, so Avatar can use a
   plain object-cover.
   =========================================================================== */

export const MEMBERS = [
  { name: 'Swara', role: 'Outreach', initials: 'S', photo: '/team/member-01.jpg' },
  { name: 'Eshaan', role: 'Programming', initials: 'E', photo: '/team/member-02.jpg' },
  { name: 'Aditi', role: 'Outreach', initials: 'A', photo: '/team/member-03.jpg' },
  { name: 'Haridev', role: 'Programming', initials: 'H', photo: '/team/member-04.jpg' },
  { name: 'Ahir', role: 'Building', initials: 'A', photo: '/team/member-05.jpg' },
  { name: 'Anish', role: 'Building', initials: 'A', photo: '/team/member-06.jpg' },
  { name: 'Santosh', role: 'Programming', initials: 'S', photo: '/team/member-07.jpg' },
  { name: 'Sana', role: 'Outreach', initials: 'S', photo: '/team/member-08.jpg' },
  { name: 'Team Member 9', role: 'Building', initials: 'M9', photo: null },
  { name: 'Team Member 10', role: 'Programming', initials: 'M10', photo: null },
  { name: 'Team Member 11', role: 'Outreach', initials: 'M11', photo: null },
]

/* Whole-team photo for the Team page header. */
export const TEAM_PHOTO = '/team/group.jpg'

export const MENTORS = [
  { name: 'Head Coach', role: 'Lead Mentor', initials: 'HC', photo: null },
  { name: 'Mentor', role: 'Engineering Mentor', initials: 'EM', photo: null },
  { name: 'Mentor', role: 'Business & Outreach', initials: 'BO', photo: null },
]

/* Role chip styling — single subtle style on the dark theme. */
export const ROLE_CHIP = 'bg-blue/15 text-azure'
