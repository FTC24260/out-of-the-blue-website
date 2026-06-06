/* ===========================================================================
   Out Of the Blue — team logo mark.
   A leaping fish (the "U" in BLUE) on the brand-blue badge, recreated as a
   scalable SVG so it stays crisp at every size (favicon -> hero).

   Variants:
     - "badge"    (default): square brand-blue badge with the fish mark.
     - "wordmark"          : full "OUT OF THE BLUE" lockup (fish = the "U").

   To use the EXACT original artwork instead of this vector recreation:
     1. Save your uploaded logo image as  public/logo.png
     2. Tell me and I'll swap usages to <img src="/logo.png" ... />
   =========================================================================== */

/* The leaping fish, drawn in a 0..100 box. Reused by every variant. */
function Fish({ fill = '#FFFFFF', eye = '#1593D8' }) {
  return (
    <g transform="rotate(-20 50 50)">
      <path d="M22 50 Q50 31 80 50 Q50 69 22 50 Z" fill={fill} />
      {/* forked tail */}
      <path d="M24 50 L8 40 L14 50 L8 60 Z" fill={fill} />
      {/* dorsal fin */}
      <path d="M45 36 L54 27 L61 38 Z" fill={fill} />
      {/* pectoral fin */}
      <path d="M52 55 L61 64 L47 60 Z" fill={fill} />
      {/* eye */}
      <circle cx="68" cy="46" r="3.4" fill={eye} />
    </g>
  )
}

export default function Logo({
  size = 40,
  rounded = 12,
  variant = 'badge',
  className = '',
  title = 'Out Of the Blue logo',
}) {
  /* ---- Full wordmark lockup ------------------------------------------- */
  if (variant === 'wordmark') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 240 240"
        role="img"
        aria-label={title}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ootb-word-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2BB4EE" />
            <stop offset="1" stopColor="#1593D8" />
          </linearGradient>
        </defs>
        <rect width="240" height="240" rx={rounded} fill="url(#ootb-word-bg)" />

        {/* Top line */}
        <text
          x="120"
          y="86"
          textAnchor="middle"
          fontFamily="Poppins, Outfit, Arial, sans-serif"
          fontWeight="800"
          fontSize="36"
          letterSpacing="3"
          fill="#FFFFFF"
        >
          OUT OF THE
        </text>

        {/* Bottom line: BL [fish] E */}
        <text
          x="22"
          y="182"
          fontFamily="Poppins, Outfit, Arial, sans-serif"
          fontWeight="800"
          fontSize="76"
          fill="#FFFFFF"
        >
          BL
        </text>
        <text
          x="222"
          y="182"
          textAnchor="end"
          fontFamily="Poppins, Outfit, Arial, sans-serif"
          fontWeight="800"
          fontSize="76"
          fill="#FFFFFF"
        >
          E
        </text>

        {/* Fish as the "U" */}
        <g transform="translate(110 116) scale(0.7)">
          <Fish />
        </g>
      </svg>
    )
  }

  /* ---- Default square badge ------------------------------------------- */
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ootb-badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2BB4EE" />
          <stop offset="1" stopColor="#1593D8" />
        </linearGradient>
      </defs>

      {/* Brand-blue rounded badge */}
      <rect width="100" height="100" rx={rounded} fill="url(#ootb-badge)" />

      {/* Leaping fish, white on blue */}
      <Fish />
    </svg>
  )
}
