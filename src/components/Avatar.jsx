/* Member avatar: renders a real photo when provided, otherwise a clean
   on-palette SVG monogram so there are never broken images. */
export default function Avatar({ name, initials, photo }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={`Portrait of ${name}`}
        loading="lazy"
        /* Portraits in /public/team are already cropped square to head-and-
           shoulders, so object-cover has nothing to trim. */
        className="h-full w-full object-cover"
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder portrait for ${name}`}
      className="flex h-full w-full items-center justify-center bg-navyAlt"
    >
      <span className="font-display text-xl text-azure">
        {initials}
      </span>
    </div>
  )
}
