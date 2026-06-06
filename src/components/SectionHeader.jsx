/* Reusable section heading block: eyebrow + title + optional subtitle. */
export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`reveal ${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading">{title}</h2>
      {subtitle && <p className="subheading">{subtitle}</p>}
    </div>
  )
}
