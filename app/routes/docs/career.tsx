import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
import CareerHighlights from "../../documents/components/CareerHighlights";
import ContactCard from "../../documents/components/ContactCard";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'career' },
];
export function meta() { return [{ title: "Career — Chris (Honggyu) Park" }, { name: 'description', content: "Chris (Honggyu) Park — DevOps Engineer based in Waterloo, ON. Mechanical-engineer turned software, building CI/CD pipelines on Azure." }, { property: 'og:title', content: "Career — Chris (Honggyu) Park" }, { property: 'og:description', content: "Chris (Honggyu) Park — DevOps Engineer based in Waterloo, ON. Mechanical-engineer turned software, building CI/CD pipelines on Azure." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-career" title="Career — Chris (Honggyu) Park" description="Chris (Honggyu) Park — DevOps Engineer based in Waterloo, ON. Mechanical-engineer turned software, building CI/CD pipelines on Azure." breadcrumbs={breadcrumbs}>

  {/* header */}
  <div className="header" style={cssStyle("margin-bottom: 20px;")}>
    <div>
      <div className="prompt">$ kubectl describe engineer/chris-park</div>
      <h1>Chris Park <span style={cssStyle("font-weight:400;color:var(--text-dim);font-size:0.5em;letter-spacing:-0.3px;")}>/ Honggyu</span></h1>
      <div className="subtitle">DevOps Engineer · Mech-Eng turned Software · Waterloo, ON</div>
    </div>
    <div className="header-meta">
      <div className="row">since: <b>2023-09</b></div>
      <div className="row">region: <b>canadacentral</b></div>
      <div className="row">status: <b style={cssStyle("color:var(--green)")}>● open to work</b></div>
    </div>
  </div>

  <CareerHighlights />

  {/* main grid */}
  <div className="grid">
    <div>
      <div className="section-label">── career.pipeline.yml</div>

      <div className="stage" style={cssStyle("--accent: var(--purple)")}>
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <span className="id">stage_01</span>
              <span className="badge b-green"><span className="badge-dot"></span>success</span>
            </div>
            <div className="stage-name">B.Eng — Mechanical Engineering</div>
            <div className="stage-sub">Jeonju University · 2015–2022</div>
          </div>
          <div className="stage-dur">7y</div>
        </div>
        <div className="stage-body">
          <ul>
            <li><span className="check" style={cssStyle("color:var(--green)")}>✓</span><span>Capstone — energy-recovery generator harvesting excess pressure in apartment water supply</span></li>
            <li><span className="check" style={cssStyle("color:var(--green)")}>✓</span><span>1st place, graduation capstone design competition</span></li>
          </ul>
        </div>
      </div>
      <div className="edge" style={cssStyle("color:var(--purple);padding:10px 0;")}>
        <svg aria-hidden="true" width="20" height="28" viewBox="0 0 20 28"><line x1="10" y1="0" x2="10" y2="22" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" style={cssStyle("animation:edgeflow 1s linear infinite;")}/><path d="M5 18 L10 26 L15 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/></svg>
      </div>

      <div className="stage" style={cssStyle("--accent: var(--green)")}>
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <span className="id">stage_02</span>
              <span className="badge b-green"><span className="badge-dot"></span>success</span>
            </div>
            <div className="stage-name">DevOps Engineer @ VARLab</div>
            <div className="stage-sub">Conestoga College · May 2024 – May 2025</div>
          </div>
          <div className="stage-dur">12mo</div>
        </div>
        <div className="stage-body">
          <ul>
            <li><span className="check" style={cssStyle("color:var(--green)")}>✓</span><span>First automated CI/CD pipelines for JS + Unity projects</span></li>
            <li><span className="check" style={cssStyle("color:var(--green)")}>✓</span><span>Docker + Azure Container Registry / Container Apps</span></li>
            <li><span className="check" style={cssStyle("color:var(--green)")}>✓</span><span>Windows → Linux migration · SonarQube + team guidelines</span></li>
          </ul>
        </div>
      </div>
      <div className="edge" style={cssStyle("color:var(--purple);padding:10px 0;")}>
        <svg aria-hidden="true" width="20" height="28" viewBox="0 0 20 28"><line x1="10" y1="0" x2="10" y2="22" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" style={cssStyle("animation:edgeflow 1s linear infinite;")}/><path d="M5 18 L10 26 L15 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/></svg>
      </div>

      <div className="stage" style={cssStyle("--accent: var(--blue)")}>
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <span className="id">stage_03</span>
              <span className="badge b-green"><span className="badge-dot"></span>success</span>
            </div>
            <div className="stage-name">Software Engineer @ Smart Centre</div>
            <div className="stage-sub">Conestoga College · May – Sep 2025</div>
          </div>
          <div className="stage-dur">5mo</div>
        </div>
        <div className="stage-body">
          <ul>
            <li><span className="check" style={cssStyle("color:var(--green)")}>✓</span><span>Full-stack app — React + Express.js REST APIs · Google OAuth 2.0 · Gemini API</span></li>
            <li><span className="check" style={cssStyle("color:var(--green)")}>✓</span><span>C# Unity VR from industrial machine scans · 3D assets via Blender</span></li>
          </ul>
        </div>
      </div>
      <div className="edge" style={cssStyle("color:var(--purple);padding:10px 0;")}>
        <svg aria-hidden="true" width="20" height="28" viewBox="0 0 20 28"><line x1="10" y1="0" x2="10" y2="22" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" style={cssStyle("animation:edgeflow 1s linear infinite;")}/><path d="M5 18 L10 26 L15 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/></svg>
      </div>

      <div className="stage" style={cssStyle("--accent: var(--green)")}>
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <span className="id">stage_04</span>
              <span className="badge b-green"><span className="badge-dot"></span>success</span>
            </div>
            <div className="stage-name">Adv. Diploma — Software Engineering Tech.</div>
            <div className="stage-sub">Conestoga College · 2023 – 2026</div>
          </div>
          <div className="stage-dur">3y</div>
        </div>
        <div className="stage-body">
          <ul>
            <li><span className="check" style={cssStyle("color:var(--green)")}>✓</span><span>Capstone <a href="https://setprojectday.ca/post/2026/loc8u/" target="_blank" rel="noopener" style={cssStyle("color:var(--purple);font-weight:600;")}>LOC8U</a> — LoRa safety net for visitors in remote areas: geofence alerts, SOS beacons, live position tracking</span></li>
            <li><span className="check" style={cssStyle("color:var(--green)")}>✓</span><span>Built the Python server bridging LoRa IoT devices ↔ client via Apache Kafka</span></li>
          </ul>
        </div>
      </div>
      <div className="edge" style={cssStyle("color:var(--purple);padding:10px 0;")}>
        <svg aria-hidden="true" width="20" height="28" viewBox="0 0 20 28"><line x1="10" y1="0" x2="10" y2="22" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" style={cssStyle("animation:edgeflow 1s linear infinite;")}/><path d="M5 18 L10 26 L15 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/></svg>
      </div>

      <div className="stage" style={cssStyle("--accent: var(--blue)")}>
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <span className="id">stage_05</span>
              <span className="badge b-blue"><span className="badge-dot"></span>running</span>
            </div>
            <div className="stage-name">Next: Full-Time DevOps / SRE</div>
            <div className="stage-sub">Open to opportunities · Canada · Remote</div>
          </div>
          <div className="stage-dur">in progress</div>
        </div>
        <div className="stage-body">
          <p style={cssStyle("font-style: italic;")}>Deployment in progress · accepting offers ▶</p>
        </div>
      </div>
    </div>

    {/* right rail */}
    <div className="rail">
      <div className="section-label">── ./contact</div>
      <ContactCard />

      <div className="section-label">── ./skills</div>
      <div className="card stack-card">
        <div className="stack-group">
          <div className="cat">CI/CD</div>
          <div className="stack-tags">
            <span className="stack-tag">Jenkins</span>
            <span className="stack-tag">GitHub Actions</span>
            <span className="stack-tag">Bitbucket</span>
            <span className="stack-tag">Azure DevOps</span>
            <span className="stack-tag">SonarQube</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Cloud / Infra</div>
          <div className="stack-tags">
            <span className="stack-tag">Azure</span>
            <span className="stack-tag">Docker</span>
            <span className="stack-tag">Container Apps</span>
            <span className="stack-tag">Linux</span>
            <span className="stack-tag">Nginx</span>
            <span className="stack-tag">Apache</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Languages</div>
          <div className="stack-tags">
            <span className="stack-tag">JavaScript</span>
            <span className="stack-tag">TypeScript</span>
            <span className="stack-tag">C#</span>
            <span className="stack-tag">Python</span>
            <span className="stack-tag">C++</span>
            <span className="stack-tag">C</span>
            <span className="stack-tag">Groovy</span>
            <span className="stack-tag">Bash</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Web</div>
          <div className="stack-tags">
            <span className="stack-tag">React</span>
            <span className="stack-tag">Next.js</span>
            <span className="stack-tag">Node.js</span>
            <span className="stack-tag">Express.js</span>
            <span className="stack-tag">NestJS</span>
            <span className="stack-tag">REST APIs</span>
            <span className="stack-tag">OAuth 2.0</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Data</div>
          <div className="stack-tags">
            <span className="stack-tag">PostgreSQL</span>
            <span className="stack-tag">MySQL</span>
            <span className="stack-tag">MongoDB</span>
            <span className="stack-tag">SQL Server</span>
            <span className="stack-tag">Supabase</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Testing</div>
          <div className="stack-tags">
            <span className="stack-tag">Jest</span>
            <span className="stack-tag">Vitest</span>
            <span className="stack-tag">PyTest</span>
            <span className="stack-tag">NUnit</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Concepts</div>
          <div className="stack-tags">
            <span className="stack-tag">OOP</span>
            <span className="stack-tag">DSA</span>
            <span className="stack-tag">HTTP</span>
            <span className="stack-tag">TLS/SSL</span>
            <span className="stack-tag">Distributed Systems</span>
            <span className="stack-tag">Git</span>
            <span className="stack-tag">Agile</span>
          </div>
        </div>
      </div>
    </div>
  </div>

    </DocumentLayout>


    </>);
}
