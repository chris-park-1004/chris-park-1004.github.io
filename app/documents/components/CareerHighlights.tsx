export interface Highlight {
    stat: string;
    title: string;
    note: string;
}
const highlights: Highlight[] = [
    { stat: '2 roles', title: 'DevOps + Software Engineer', note: '16-month co-op · CI/CD at VARLab, full-stack at Smart Centre' },
    { stat: '3 CI platforms', title: 'Jenkins · Azure DevOps · GitHub Actions', note: 'from org-first pipelines to self-hosted, tunnel-secured infra' },
    { stat: '2 degrees', title: 'Mechanical → Software Engineering', note: '1st-place mechanical capstone · systems thinking on both sides' },
    { stat: '4 AI builds', title: 'Gemini apps · context hooks · chatbot', note: 'co-op product + 3 hackathon projects, all shipped with repos' },
];
export default function CareerHighlights() {
    return (<>
    <h2 className="highlights-heading">Career Highlights</h2>
    <div className="highlight-grid">
  {highlights.map((h, itemIndex) => (<div className="highlight" key={itemIndex}>
      <span className="highlight-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {itemIndex === 0 ? <><rect x="3" y="7" width="18" height="14" rx="3" /><path d="M8 7V4h8v3M3 12a22 22 0 0 0 18 0M12 12v3" /></>
            : itemIndex === 1 ? <><rect x="4" y="3" width="16" height="7" rx="2" /><rect x="4" y="14" width="16" height="7" rx="2" /><path d="M8 6.5h.01M8 17.5h.01M12 10v4" /></>
            : itemIndex === 2 ? <><path d="m2 9 10-5 10 5-10 5-10-5M6 11v6c4 3 8 3 12 0v-6M22 9v7" /></>
            : <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4m-2-2h4" /></>}
        </svg>
      </span>
      <div className="hl-stat"><span className="hl-number">{h.stat.split(' ')[0]}</span>{' '}{h.stat.split(' ').slice(1).join(' ')}</div>
      <div className="hl-title">{h.title}</div>
      <div className="hl-note">{h.note}</div>
    </div>))}
    </div>


    </>);
}
