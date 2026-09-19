/* ===========================================================================
   SOCIAL VIDEO

   Thumbnails are downloaded into /public/media rather than hot-linked:
   Instagram's CDN URLs carry expiring signatures, so a hot-link renders for a
   while and then silently turns into a broken image.

   To add a reel: open the post, take its /p/<code>/ URL, save the thumbnail
   alongside the others, and add an entry. The play badge is already part of
   Instagram's thumbnail, so the card must not draw its own.
   =========================================================================== */

export const REELS = [
  {
    url: 'https://www.instagram.com/p/DdJ48oHyRI8/',
    thumb: '/media/reel-1.jpg',
    caption: 'Our options are limited…',
    date: 'September 11, 2026',
    alt: 'Three Out Of the Blue members walking away from an explosion',
  },
  {
    url: 'https://www.instagram.com/p/DdO791GxF_N/',
    thumb: '/media/reel-2.jpg',
    caption: 'Someone has to hold it down at NCFTC kickoff',
    date: 'September 13, 2026',
    alt: 'Team members walking across campus at the NC FTC season kickoff',
  },
]
