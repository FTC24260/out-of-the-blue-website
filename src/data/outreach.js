/* ===========================================================================
   OUTREACH & COMMUNITY SERVICE LOG

   The team has run 16 outreach events this season (the figure shown in STATS),
   but the event-by-event details haven't been supplied yet, so this list is
   deliberately EMPTY rather than filled with invented entries — the page
   renders an honest "log coming soon" state while it is.

   To populate: add one object per event and the page picks them up. Keep
   `count` in step with STATS in src/data/content.js.

     { title: 'STEM night at ...', date: 'March 2026',
       audience: '~120 students', blurb: 'What we ran and why.',
       photo: '/outreach/stem-night.jpg' }   // photo optional
   =========================================================================== */

export const OUTREACH_COUNT_THIS_SEASON = 16

export const OUTREACH_EVENTS = []

/* The standing programs we run — safe to describe without per-event detail. */
export const OUTREACH_FOCUS = [
  {
    title: '#FIRSTLikeAGirl',
    blurb:
      'We are ambassadors for the campaign, working to open robotics up to girls and students from traditionally underrepresented communities.',
  },
  {
    title: 'Sister teams',
    blurb:
      'We help start and support three sister teams under Biome Robotics, sharing tooling, mentoring, and competition experience.',
  },
  {
    title: 'Community demos',
    blurb:
      'We bring the robot out to schools, libraries, and community events so younger students can drive it and see FIRST up close.',
  },
]
