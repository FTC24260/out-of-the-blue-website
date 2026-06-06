import { useEffect, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, CalendarDays, MapPin, Users } from 'lucide-react'
import GalleryTile from './GalleryTile'

/* Only show a meta chip if the field has a real value (not a TODO placeholder). */
function isReal(v) {
  return v && !String(v).toUpperCase().includes('TODO')
}

/* Accessible lightbox modal. Keyboard: Escape closes, ←/→ navigate.
   Controlled by Outreach via `index` (null = closed). */
export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const dialogRef = useRef(null)
  const open = index !== null && index >= 0

  const handleKey = useCallback(
    (e) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
    },
    [open, onClose, onPrev, onNext],
  )

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    // Move focus into the dialog for screen-reader / keyboard users.
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, handleKey])

  if (!open) return null
  const item = items[index]

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-deep/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${item.title}`}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-deep shadow-card transition hover:bg-white"
        aria-label="Close image viewer"
      >
        <X size={22} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-deep shadow-card transition hover:bg-white sm:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-deep shadow-card transition hover:bg-white sm:right-6"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Detail card — photo + full outreach write-up for sponsors */}
      <figure
        ref={dialogRef}
        tabIndex={-1}
        className="mx-auto grid w-full max-w-4xl gap-0 overflow-hidden rounded-2xl bg-white shadow-card outline-none md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-[4/3] w-full overflow-hidden bg-sky md:aspect-auto md:h-full">
          <GalleryTile item={item} large />
        </div>
        <figcaption className="flex flex-col p-6 text-left sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-azure">
            Outreach {index + 1} of {items.length}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold text-deep">
            {item.title}
          </h3>

          {/* Meta chips — only render fields that have real values */}
          <div className="mt-3 flex flex-wrap gap-2">
            {isReal(item.date) && (
              <Meta icon={CalendarDays} text={item.date} />
            )}
            {isReal(item.location) && (
              <Meta icon={MapPin} text={item.location} />
            )}
            {isReal(item.reach) && <Meta icon={Users} text={item.reach} />}
          </div>

          <p className="mt-4 flex-1 leading-relaxed text-ink/80">
            {item.body || item.caption}
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Meta({ icon: I, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-sky px-3 py-1 text-xs font-semibold text-deep">
      <I size={13} aria-hidden="true" />
      {text}
    </span>
  )
}
