export function InfrastructureVisual() {
  return (
    <div
      className="project-visual infrastructure-visual"
      role="img"
      aria-label="Self-hosted Jenkins workflow: GitHub pushes trigger Jenkins builds, with monitoring in Grafana"
    >
      <div className="visual-topline">
        <span className="visual-brand">Jenkins<span>↗</span></span>
        <span className="tiny-label">BUILT AT HOME.</span>
      </div>
      <svg className="infra-diagram" viewBox="0 0 340 200" aria-hidden="true">
        <path d="M79 96h41m100 0h41M115 91l5 5-5 5m141-10 5 5-5 5" fill="none" stroke="#ad9cbe" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path className="jenkins-flow" d="M79 96h41m100 0h41" fill="none" stroke="#886bad" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 60" opacity="0" />
        <g transform="translate(8 64)">
          <rect y="4" width="64" height="64" rx="16" fill="#ded8e8" />
          <rect width="64" height="64" rx="16" fill="#faf9fc" stroke="#d6d0de" />
          <image href="/brands/github.svg" x="12" y="12" width="40" height="40" />
        </g>
        <g className="jenkins-server" transform="translate(128 42)">
          <rect y="6" width="84" height="108" rx="20" fill="#d5cce2" />
          <rect width="84" height="108" rx="20" fill="#faf9fc" stroke="#c5b8d5" />
          <image href="/brands/jenkins.svg" x="12" y="12" width="60" height="84" />
        </g>
        <g transform="translate(268 64)">
          <rect y="4" width="64" height="64" rx="16" fill="#ded8e8" />
          <rect width="64" height="64" rx="16" fill="#faf9fc" stroke="#d6d0de" />
          <image href="/brands/grafana.svg" x="10" y="10" width="44" height="44" />
        </g>
        <g className="infra-node-label" textAnchor="middle">
          <text x="40" y="184">GitHub</text>
          <text x="170" y="184">Jenkins</text>
          <text x="300" y="184">Grafana</text>
        </g>
      </svg>
      <div className="visual-bottomline">
        <span>My machine. My pipeline.</span>
        <span className="tiny-label">CONCEPT DIAGRAM</span>
      </div>
    </div>
  );
}

export function HandoffVisual() {
  return (
    <div
      className="project-visual handoff-visual"
      role="img"
      aria-label="Handoff concept illustration: shared context connects one coding agent to the next"
    >
      <div className="visual-topline">
        <span className="visual-brand">
          handoff<span>↗</span>
        </span>
        <span className="tiny-label">CONTEXT, CONTINUED.</span>
      </div>
      <div className="handoff-diagram" aria-hidden="true">
        <div className="agent-tile agent-before">
          <span className="agent-symbol">⌘</span>
          <span>Agent A</span>
        </div>
        <span className="handoff-connector" />
        <div className="context-stack">
          <div />
          <div />
          <div>
            <svg width="33" height="38" viewBox="0 0 33 38" fill="none">
              <path
                d="M7 2h13l7 7v27H7zM20 2v8h7M12 17h10M12 23h10M12 29h6"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </div>
          <span>shared context</span>
        </div>
        <span className="handoff-connector" />
        <div className="agent-tile agent-after">
          <span className="agent-symbol">✳</span>
          <span>Agent B</span>
        </div>
      </div>
      <div className="visual-bottomline">
        <span>One conversation. Across sessions.</span>
        <span className="tiny-label">CONCEPT DIAGRAM</span>
      </div>
    </div>
  );
}

export function Loc8uVisual() {
  return (
    <div
      className="project-visual loc8u-visual"
      role="img"
      aria-label="Loc8U concept illustration: LoRa signals connect remote locations across a landscape"
    >
      <svg
        className="terrain"
        viewBox="0 0 600 380"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="#c6d3c4" strokeWidth="1">
          <path d="M-30 225C84 24 139 270 298 117S494 84 653-3M-40 243C84 42 146 288 305 135S501 102 660 15M-50 261C84 60 153 306 312 153S508 120 667 33M-60 279C84 78 160 324 319 171S515 138 674 51M-70 297C84 96 167 342 326 189S522 156 681 69M-80 315C84 114 174 360 333 207S529 174 688 87M-90 333C84 132 181 378 340 225S536 192 695 105M-100 351C84 150 188 396 347 243S543 210 702 123M-110 369C84 168 195 414 354 261S550 228 709 141M-120 387C84 186 202 432 361 279S557 246 716 159M-130 405C84 204 209 450 368 297S564 264 723 177" />
        </g>
        <path
          className="location-route"
          d="m165 255 146-102 130 76"
          fill="none"
          stroke="#678267"
          strokeDasharray="5 7"
          strokeWidth="1.5"
        />
        <g fill="none" stroke="#688365">
          <circle cx="311" cy="153" r="50" opacity=".25" />
          <circle cx="311" cy="153" r="32" opacity=".4" />
          <circle className="location-pulse" cx="311" cy="153" r="32" opacity="0" />
        </g>
        <g fill="#43623f" stroke="#e8efe4" strokeWidth="6">
          <circle cx="165" cy="255" r="9" />
          <circle cx="441" cy="229" r="9" />
        </g>
        <g transform="translate(293 124)">
          <path
            d="M18 0C8 0 0 8 0 18c0 14 18 29 18 29s18-15 18-29C36 8 28 0 18 0"
            fill="#45683f"
          />
          <circle cx="18" cy="18" r="6" fill="#eef3e9" />
        </g>
      </svg>
      <div className="visual-topline">
        <span className="visual-brand">
          loc8u<span>↗</span>
        </span>
        <span className="tiny-label">BEYOND THE NETWORK.</span>
      </div>
      <div className="visual-bottomline">
        <span>
          <span className="signal-dot" /> Connected by LoRa
        </span>
        <span className="tiny-label">CONCEPT DIAGRAM</span>
      </div>
    </div>
  );
}
