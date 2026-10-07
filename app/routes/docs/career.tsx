import '../../styles/career.css';
import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
import CareerHighlights from "../../documents/components/CareerHighlights";
import ContactCard from "../../documents/components/ContactCard";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'career' },
];
function CareerIcon({ kind }: { kind: 'mechanical' | 'infra' | 'code' | 'education' | 'next' }) {
  return <span className="career-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {kind === 'mechanical' ? <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2" /></>
      : kind === 'infra' ? <><rect x="4" y="3" width="16" height="7" rx="2" /><rect x="4" y="14" width="16" height="7" rx="2" /><path d="M8 6.5h.01M8 17.5h.01M12 10v4" /></>
      : kind === 'code' ? <><rect x="2" y="3" width="20" height="18" rx="3" /><path d="M2 8h20m-14 4-3 3 3 3m8-6 3 3-3 3m-3-7-2 8" /></>
      : kind === 'education' ? <><path d="m2 9 10-5 10 5-10 5-10-5M6 11v6c4 3 8 3 12 0v-6M22 9v7" /></>
      : <><path d="M5 19 19 5M7 5h12v12M4 7V4h3" /></>}
  </svg></span>;
}
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
    <div className="career-history">
      <h2 className="section-label">Experience & education</h2>

      <div className="stage" data-discipline="mechanical">
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <CareerIcon kind="mechanical" />
              <span className="career-type">Education</span>
            </div>
            <h3 className="stage-name">B.Eng — Mechanical Engineering</h3>
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
      <div className="career-connector" aria-hidden="true" />

      <div className="stage" data-discipline="infra">
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <CareerIcon kind="infra" />
              <span className="career-type">Experience</span>
            </div>
            <h3 className="stage-name">DevOps Engineer @ VARLab</h3>
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
      <div className="career-connector" aria-hidden="true" />

      <div className="stage" data-discipline="code">
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <CareerIcon kind="code" />
              <span className="career-type">Experience</span>
            </div>
            <h3 className="stage-name">Software Engineer @ Smart Centre</h3>
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
      <div className="career-connector" aria-hidden="true" />

      <div className="stage" data-discipline="education">
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <CareerIcon kind="education" />
              <span className="career-type">Education</span>
            </div>
            <h3 className="stage-name">Adv. Diploma — Software Engineering Tech.</h3>
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
      <div className="career-connector" aria-hidden="true" />

      <div className="stage" data-discipline="next">
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <CareerIcon kind="next" />
              <span className="career-type">Next chapter</span>
            </div>
            <h3 className="stage-name">Next: Full-Time DevOps / SRE</h3>
            <div className="stage-sub">Open to opportunities · Canada · Remote</div>
          </div>
          <div className="stage-dur">in progress</div>
        </div>
        <div className="stage-body">
          <p>Open to full-time DevOps, SRE, and software engineering opportunities.</p>
        </div>
      </div>
    </div>

    {/* right rail */}
    <div className="rail">
      <h2 className="section-label">Contact</h2>
      <ContactCard />

      <h2 className="section-label">Skills</h2>
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
