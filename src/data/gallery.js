/* ===========================================================================
   OUTREACH GALLERY WALK — one entry per outreach event.
   ---------------------------------------------------------------------------
   This drives the big Outreach section: each entry becomes a card (photo +
   short blurb) and opens a detailed view in the lightbox.

   👉 HOW TO ADD YOUR REAL OUTREACHES (this is the only file you edit):
     1. Drop each photo in  public/outreach/  (e.g. public/outreach/library.jpg)
     2. Copy one { ... } block below per event and fill in the fields:
          - title:    name of the event
          - date:     when it happened (free text, e.g. 'Mar 2026')
          - location: where (e.g. 'Cary Library, Cary NC')
          - reach:    OPTIONAL — people reached, e.g. '~120 students'
          - blurb:    one short line shown on the card
          - body:     a fuller paragraph shown in the detailed view
          - src:      '/outreach/your-photo.jpg'  (or null for a placeholder tile)
          - hue:      a brand color for the placeholder tile if src is null
     3. You have 16 outreaches this season — add all 16 here and they'll all
        appear automatically. The 6 below are PLACEHOLDERS to be replaced.

   Nothing here is presented as fact on the page beyond what you enter — the
   placeholder entries are clearly generic until you swap in real details.
   =========================================================================== */
export const OUTREACHES = [
  {
    id: 'o1',
    title: 'School STEM Demo',
    date: 'TODO: date',
    location: 'TODO: school / city',
    reach: 'TODO: # reached',
    blurb: 'Hands-on robot demos for younger students.',
    body: 'Placeholder — replace with a description of this outreach: what you did, who attended, and the impact it had. Showing younger students how our robot moves and thinks sparks the same curiosity that started us.',
    hue: '#4FB3E8',
    src: null,
  },
  {
    id: 'o2',
    title: 'Library Workshop',
    date: 'TODO: date',
    location: 'TODO: library / city',
    reach: 'TODO: # reached',
    blurb: 'A hands-on robotics session at a public library.',
    body: 'Placeholder — replace with details about this library workshop: the activities you ran, the age groups involved, and what families took away from it.',
    hue: '#2D8FD4',
    src: null,
  },
  {
    id: 'o3',
    title: 'Museum Event',
    date: 'TODO: date',
    location: 'TODO: museum / city',
    reach: 'TODO: # reached',
    blurb: 'Bringing the robot — and the science — to the community.',
    body: 'Placeholder — replace with details about this museum appearance: how many visitors stopped by, what demos you showed, and the conversations it started about STEM.',
    hue: '#7FD0FF',
    src: null,
  },
  {
    id: 'o4',
    title: 'Girls in STEM Event',
    date: 'TODO: date',
    location: 'TODO: location',
    reach: 'TODO: # reached',
    blurb: 'Championing #FIRSTLikeAGirl and women in STEM.',
    body: 'Placeholder — replace with details about this event: as #FIRSTLikeAGirl ambassadors and a team that is 50% girls, describe how you encouraged more young women to see themselves in engineering.',
    hue: '#0F4C81',
    src: null,
  },
  {
    id: 'o5',
    title: 'Community Festival',
    date: 'TODO: date',
    location: 'TODO: location',
    reach: 'TODO: # reached',
    blurb: 'STEM advocacy and demos at a community event.',
    body: 'Placeholder — replace with details about this festival: the booth you ran, the demos you gave, and how you connected with families across Raleigh.',
    hue: '#2D8FD4',
    src: null,
  },
  {
    id: 'o6',
    title: 'Mentoring a Rookie Team',
    date: 'TODO: date',
    location: 'TODO: location',
    reach: 'TODO: # reached',
    blurb: 'Helping a new team get started in FTC.',
    body: 'Placeholder — replace with details: gracious professionalism in action. Describe how you shared resources, build tips, or coding help with a newer team.',
    hue: '#4FB3E8',
    src: null,
  },
]

/* Backwards-compatible alias so the lightbox/tile components keep working.
   (They expect a `caption` field.) */
export const GALLERY = OUTREACHES.map((o) => ({ ...o, caption: o.blurb }))
