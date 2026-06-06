/* Member avatar: renders a real photo when provided, otherwise a clean
   on-palette SVG monogram so there are never broken images. */
export default function Avatar({ name, initials, photo }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={`Portrait of ${name}`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder portrait for ${name}`}
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-powder to-glow/60"
    >
      <span className="font-display text-2xl font-bold text-deep/70">
        {initials}
      </span>
    </div>
  )
}
