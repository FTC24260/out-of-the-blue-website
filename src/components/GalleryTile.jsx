import { Camera } from 'lucide-react'

/* Renders a real photo when `item.src` is set, otherwise a labeled SVG-style
   placeholder tile. `large` switches to the bigger lightbox layout. */
export default function GalleryTile({ item, large = false }) {
  if (item.src) {
    return (
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        className={`h-full w-full object-cover ${large ? '' : 'transition-transform duration-500 group-hover:scale-105'}`}
      />
    )
  }

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center p-6 text-center"
      style={{
        background: `linear-gradient(150deg, ${item.hue}33 0%, ${item.hue}66 100%)`,
      }}
    >
      <span
        className="grid place-items-center rounded-2xl bg-white/80 shadow-soft"
        style={{ height: large ? 72 : 52, width: large ? 72 : 52 }}
      >
        <Camera
          size={large ? 32 : 24}
          aria-hidden="true"
          style={{ color: item.hue }}
        />
      </span>
      <p
        className={`mt-3 font-display font-bold text-deep ${large ? 'text-xl' : 'text-sm'}`}
      >
        {item.title}
      </p>
      {large && (
        <p className="mt-1 max-w-sm text-sm text-deep/70">Placeholder image</p>
      )}
    </div>
  )
}
