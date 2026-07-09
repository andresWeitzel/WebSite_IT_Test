/** Ilustración inline para la tarjeta de cursos (sin depender de assets externos). */
export function renderCoursesIllustration() {
  return `
    <svg
      class="courses-card__svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Cursos en video por tema: informatica, redes, Linux y automatizacion"
    >
      <defs>
        <linearGradient id="courses-bg" x1="0" y1="0" x2="640" y2="480" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0e7490"/>
          <stop offset="0.42" stop-color="#115e59"/>
          <stop offset="1" stop-color="#0f172a"/>
        </linearGradient>
        <linearGradient id="courses-screen" x1="180" y1="110" x2="460" y2="330" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1e293b"/>
          <stop offset="1" stop-color="#020617"/>
        </linearGradient>
        <linearGradient id="courses-play" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#22d3ee"/>
          <stop offset="1" stop-color="#0891b2"/>
        </linearGradient>
        <radialGradient id="courses-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320 240) rotate(90) scale(220 180)">
          <stop stop-color="#22d3ee" stop-opacity="0.28"/>
          <stop offset="1" stop-color="#22d3ee" stop-opacity="0"/>
        </radialGradient>
        <filter id="courses-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#020617" flood-opacity="0.55"/>
        </filter>
      </defs>

      <rect width="640" height="480" fill="url(#courses-bg)"/>
      <circle cx="320" cy="235" r="200" fill="url(#courses-glow)"/>

      <g stroke="#94a3b8" stroke-opacity="0.07" stroke-width="1">
        <path d="M0 80h640M0 160h640M0 240h640M0 320h640M0 400h640"/>
        <path d="M80 0v480M160 0v480M240 0v480M320 0v480M400 0v480M480 0v480M560 0v480"/>
      </g>

      <circle cx="320" cy="228" r="150" stroke="#22d3ee" stroke-opacity="0.14" stroke-width="1.5" stroke-dasharray="7 12"/>
      <circle cx="320" cy="228" r="118" stroke="#34d399" stroke-opacity="0.1" stroke-width="1"/>

      <g filter="url(#courses-shadow)">
        <rect x="148" y="108" width="344" height="232" rx="22" fill="url(#courses-screen)" stroke="#22d3ee" stroke-opacity="0.4" stroke-width="2"/>
        <rect x="168" y="128" width="304" height="168" rx="12" fill="#020617" fill-opacity="0.72"/>

        <rect x="188" y="148" width="118" height="66" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
        <circle cx="247" cy="175" r="14" fill="url(#courses-play)"/>
        <path d="M242 167v16l12-8-12-8z" fill="#0f172a"/>

        <rect x="318" y="148" width="134" height="10" rx="5" fill="#22d3ee" fill-opacity="0.55"/>
        <rect x="318" y="168" width="96" height="8" rx="4" fill="#64748b" fill-opacity="0.55"/>
        <rect x="318" y="184" width="112" height="8" rx="4" fill="#64748b" fill-opacity="0.4"/>

        <rect x="188" y="226" width="118" height="50" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
        <rect x="200" y="238" width="72" height="6" rx="3" fill="#34d399" fill-opacity="0.65"/>
        <rect x="200" y="252" width="54" height="6" rx="3" fill="#64748b" fill-opacity="0.45"/>

        <rect x="318" y="226" width="134" height="50" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
        <rect x="330" y="238" width="88" height="6" rx="3" fill="#22d3ee" fill-opacity="0.55"/>
        <rect x="330" y="252" width="64" height="6" rx="3" fill="#64748b" fill-opacity="0.45"/>

        <rect x="188" y="292" width="264" height="8" rx="4" fill="#22d3ee" fill-opacity="0.35"/>
        <rect x="188" y="308" width="198" height="6" rx="3" fill="#64748b" fill-opacity="0.35"/>
      </g>

      <g>
        <rect x="44" y="56" width="104" height="34" rx="17" fill="#0f172a" fill-opacity="0.78" stroke="#22d3ee" stroke-opacity="0.35"/>
        <text x="96" y="78" text-anchor="middle" fill="#e2e8f0" font-family="system-ui,sans-serif" font-size="13" font-weight="600">Informatica</text>

        <rect x="492" y="62" width="88" height="34" rx="17" fill="#0f172a" fill-opacity="0.78" stroke="#34d399" stroke-opacity="0.35"/>
        <text x="536" y="84" text-anchor="middle" fill="#e2e8f0" font-family="system-ui,sans-serif" font-size="13" font-weight="600">Redes</text>

        <rect x="28" y="372" width="88" height="34" rx="17" fill="#0f172a" fill-opacity="0.78" stroke="#22d3ee" stroke-opacity="0.35"/>
        <text x="72" y="394" text-anchor="middle" fill="#e2e8f0" font-family="system-ui,sans-serif" font-size="13" font-weight="600">Linux</text>

        <rect x="500" y="378" width="118" height="34" rx="17" fill="#0f172a" fill-opacity="0.78" stroke="#34d399" stroke-opacity="0.35"/>
        <text x="559" y="400" text-anchor="middle" fill="#e2e8f0" font-family="system-ui,sans-serif" font-size="12" font-weight="600">Automatizacion</text>
      </g>

      <g stroke="#22d3ee" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7">
        <path d="M86 168 62 188l24 20"/>
        <path d="M554 168l24 20-24 20"/>
      </g>

      <g fill="#34d399" fill-opacity="0.9">
        <circle cx="548" cy="198" r="5"/>
        <circle cx="576" cy="218" r="4"/>
        <circle cx="560" cy="238" r="4"/>
      </g>
      <g stroke="#34d399" stroke-opacity="0.45" stroke-width="1.5">
        <path d="M548 198l28 20M548 198l12 40M576 218l-16 20"/>
      </g>

      <rect x="56" y="206" width="58" height="44" rx="9" fill="#0f172a" fill-opacity="0.82" stroke="#64748b" stroke-opacity="0.45"/>
      <circle cx="68" cy="218" r="2.5" fill="#f87171"/>
      <circle cx="78" cy="218" r="2.5" fill="#fbbf24"/>
      <circle cx="88" cy="218" r="2.5" fill="#34d399"/>
      <path d="M64 236h22M64 242h16" stroke="#22d3ee" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round"/>

      <path d="M498 352c-9-4-20-4-29 0v30c9-4 20-4 29 0v-30z" fill="#22d3ee" fill-opacity="0.18" stroke="#22d3ee" stroke-opacity="0.5" stroke-width="1.5"/>
      <path d="M469 352c9-4 20-4 29 0v30c-9-4-20-4-29 0v-30z" fill="#34d399" fill-opacity="0.14" stroke="#34d399" stroke-opacity="0.42" stroke-width="1.5"/>
    </svg>
  `;
}
