const connections = [
  "M210 127h18q24 0 24 24v48",
  "M388 113h-17q-22 0-22 22v49",
  "M205 363h18q30 0 30-30v-9",
  "M394 358h-11q-34 0-34-34v-15",
];

function SourceBorder() {
  return (
    <g fill="none" stroke="#a17be6" pointerEvents="none">
      <rect className="system-source-bloom" x="1" y="1" width="168" height="108" rx="15" strokeWidth="5" filter="url(#hub-bloom)" opacity="0" />
      <rect className="system-source-rim" x="1" y="1" width="168" height="108" rx="15" strokeWidth="2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" opacity="0" />
    </g>
  );
}

export function SystemGraphic() {
  return (
    <div className="system-visual">
      <svg
        className="system-svg"
        viewBox="0 0 600 510"
        role="img"
        aria-labelledby="system-title system-desc"
      >
        <title id="system-title">
          Connected engineering disciplines
        </title>
        <desc id="system-desc">
          Chris Park’s experience connects DevOps, Web Development, AI Integration,
          and Mechanical Engineering, represented by a delivery loop, a browser,
          connected AI nodes, and a gear. The four card borders light up before
          signals travel inward to a full-stack developer symbol: a browser,
          an application server, and a database connected in layers.
        </desc>
        <defs>
          <g id="system-hub-mark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="44" y="23" width="54" height="33" rx="5" />
            <path d="M44 32h54m-47-4h1m5 0h1m3 9-5 6 5 6m20-12 5 6-5 6m-8-13-4 14M71 56v8" />
            <rect x="47" y="64" width="48" height="11" rx="3" />
            <path d="M53 69.5h15m13 0h1m6 0h1M71 75v8" />
            <ellipse cx="71" cy="87" rx="21" ry="5" />
            <path d="M50 87v10c0 7 42 7 42 0V87" />
          </g>
          <filter id="hub-bloom" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <pattern
            id="dots"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#c6c5ce" />
          </pattern>
          <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#906cf1" />
            <stop offset="1" stopColor="#6841c8" />
          </linearGradient>
          <filter id="tile-shadow" x="-40%" y="-40%" width="180%" height="200%">
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="14"
              floodColor="#523aa3"
              floodOpacity=".16"
            />
          </filter>
        </defs>
        <rect
          x="12"
          y="10"
          width="576"
          height="470"
          fill="url(#dots)"
          opacity=".6"
        />
        <ellipse
          cx="301"
          cy="260"
          rx="235"
          ry="174"
          fill="none"
          stroke="#e5e1eb"
          strokeDasharray="4 8"
          transform="rotate(-24 301 260)"
        />
        <g fill="none" stroke="#c4b5e6" strokeWidth="2">
          {connections.map(d => <path key={d} d={d} />)}
        </g>
        <g className="system-signals" fill="none" stroke="#9770ea" strokeWidth="3.5" strokeLinecap="round">
          {connections.map(d => (
            <path key={d} className="system-flow" d={d} pathLength="100" strokeDasharray="8 100" strokeDashoffset="8" opacity="0" />
          ))}
        </g>
        <g fill="#8b65df">
          <circle cx="210" cy="127" r="4" />
          <circle cx="349" cy="172" r="4" />
          <circle cx="253" cy="330" r="4" />
          <circle cx="410" cy="358" r="4" />
        </g>
        <g transform="translate(40 65) rotate(-7 85 55)">
          <rect y="7" width="170" height="110" rx="16" fill="#e9e7ed" />
          <rect width="170" height="110" rx="16" fill="#fff" stroke="#dfdce7" />
          <SourceBorder />
          <path
            d="M85 38c-10-19-32-19-32 0s22 19 32 0 32-19 32 0-22 19-32 0m-23-14-7 3 2 8m48 17 7-3-2-8"
            fill="none"
            stroke="#7550c9"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text x="85" y="88" textAnchor="middle" className="node-label">
            DevOps
          </text>
        </g>
        <g transform="translate(390 50) rotate(8 85 55)">
          <rect y="7" width="170" height="110" rx="16" fill="#e9e7ed" />
          <rect width="170" height="110" rx="16" fill="#fff" stroke="#dfdce7" />
          <SourceBorder />
          <g fill="none" stroke="#7550c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="60" y="18" width="50" height="39" rx="5" />
            <path d="M60 29h50m-43-6h1m5 0h1m3 12-6 6 6 6m16-12 6 6-6 6m-7-13-3 15" />
          </g>
          <text x="85" y="80" textAnchor="middle" className="node-label">
            <tspan x="85">Web</tspan>
            <tspan x="85" dy="17">Development</tspan>
          </text>
        </g>
        <g
          className="system-hub"
          filter="url(#tile-shadow)"
          transform="translate(231 192) rotate(-9 70 62)"
        >
          <rect y="10" width="142" height="124" rx="27" fill="#5835a9" />
          <rect width="142" height="124" rx="27" fill="url(#tile)" />
          <rect className="system-hub-bloom" x="1" y="1" width="140" height="122" rx="26" fill="none" stroke="#c5a9ff" strokeWidth="7" filter="url(#hub-bloom)" opacity="0" />
          <rect className="system-hub-rim" x="1.5" y="1.5" width="139" height="121" rx="25.5" fill="none" stroke="#f0e7ff" strokeWidth="2" opacity="0" />
          <use href="#system-hub-mark" color="#f2eaff" />
          <use className="system-hub-bloom" href="#system-hub-mark" color="#fff" filter="url(#hub-bloom)" opacity="0" />
          <use className="system-hub-rim" href="#system-hub-mark" color="#fff" opacity="0" />
        </g>
        <g transform="translate(32 337) rotate(5 85 55)">
          <rect y="7" width="170" height="110" rx="16" fill="#e9e7ed" />
          <rect width="170" height="110" rx="16" fill="#fff" stroke="#dfdce7" />
          <SourceBorder />
          <g fill="none" stroke="#7550c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m85 22 5 12 12 5-12 5-5 12-5-12-12-5 12-5Zm-19 2 8 6m22 17 9 7m-39-2 8-7" />
            <circle cx="62" cy="21" r="4" />
            <circle cx="109" cy="57" r="4" />
            <circle cx="62" cy="55" r="4" />
          </g>
          <text x="85" y="88" textAnchor="middle" className="node-label">
            AI Integration
          </text>
        </g>
        <g transform="translate(396 328) rotate(-6 85 55)">
          <rect y="7" width="170" height="110" rx="16" fill="#e9e7ed" />
          <rect width="170" height="110" rx="16" fill="#fff" stroke="#dfdce7" />
          <SourceBorder />
          <g transform="translate(85 38)" fill="#fff" stroke="#7550c9" strokeWidth="2">
            {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
              <rect key={angle} x="-4" y="-23" width="8" height="12" rx="1.5" transform={`rotate(${angle})`} />
            ))}
            <circle r="17" />
            <circle r="7" />
          </g>
          <text x="85" y="80" textAnchor="middle" className="node-label">
            <tspan x="85">Mechanical</tspan>
            <tspan x="85" dy="17">Engineering</tspan>
          </text>
        </g>
        <g fill="#a797c9">
          <path
            d="M290 63v12m-6-6h12M540 247v12m-6-6h12M268 434v12m-6-6h12"
            stroke="#a797c9"
            strokeWidth="1.5"
          />
          <circle cx="42" cy="244" r="3" />
        </g>
      </svg>
    </div>
  );
}
