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
    <div className="highlights-heading"><span className="highlights-heading-bar"></span>Career Highlights</div>
    <div className="highlight-grid">
  {highlights.map((h, itemIndex) => (<div className="highlight" key={itemIndex}>
      <div className="hl-stat">{h.stat}</div>
      <div className="hl-title">{h.title}</div>
      <div className="hl-note">{h.note}</div>
    </div>))}
    </div>


    </>);
}
