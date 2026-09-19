/* Shared masthead for the routed sub-pages, so Team / Awards / Outreach /
   Media / Sponsors all open the same way. Pads for the fixed navbar. */
export default function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="border-b border-line bg-navyAlt pb-10 pt-[calc(var(--header-h)+2.5rem)]">
      <div className="container-x">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="font-display text-3xl font-extrabold leading-tight text-light sm:text-4xl">
          {title}
        </h1>
        {children && <p className="subheading">{children}</p>}
      </div>
    </header>
  )
}
