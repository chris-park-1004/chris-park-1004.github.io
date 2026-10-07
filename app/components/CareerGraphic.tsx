export function CareerGraphic() {
  return (
    <svg className="career-graphic" viewBox="0 0 340 100" role="img" aria-labelledby="career-graphic-title">
      <title id="career-graphic-title">Mechanical engineering, software development, and AI connected in one path</title>
      <g fill="none" stroke="#c8bfdc" strokeWidth="1.5">
        <path d="M77 38h57m-6-4 6 4-6 4M206 38h57m-6-4 6 4-6 4" />
      </g>
      <rect x="1" y="1" width="76" height="74" rx="20" fill="#efeee9" />
      <rect x="134" y="1" width="72" height="74" rx="20" fill="#eee9f6" />
      <rect x="263" y="1" width="76" height="74" rx="20" fill="#eee9f6" />
      <g fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <g stroke="#716d7b" transform="translate(39 38)">
          <path d="m-5-17 1-4h8l1 4 5 3 4-1 4 7-3 3v6l3 3-4 7-4-1-5 3-1 4h-8l-1-4-5-3-4 1-4-7 3-3v-6l-3-3 4-7 4 1Z" />
          <circle r="7" />
        </g>
        <g stroke="#7955b8">
          <rect x="151" y="23" width="38" height="30" rx="5" />
          <path d="M151 31h38m-27 6-5 5 5 5m16-10 5 5-5 5m-6-12-4 14" />
          <path d="m301 23 4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" />
          <path d="m318 18 1.5 4.5L324 24l-4.5 1.5L318 30l-1.5-4.5L312 24l4.5-1.5Z" />
        </g>
      </g>
      <g className="career-graphic-label" textAnchor="middle" fill="#797381">
        <text x="39" y="96">MECHANICAL</text>
        <text x="170" y="96">SOFTWARE</text>
        <text x="301" y="96">AI & TOOLS</text>
      </g>
    </svg>
  );
}
