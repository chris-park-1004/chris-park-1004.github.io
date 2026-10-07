import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
import PanelGrid from "../../documents/components/PanelGrid";
import type { Panel } from "../../documents/components/PanelGrid";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'grafana', href: '/projects/ci-cd/grafana/' },
    { label: 'jenkins-overview' },
];
const panels: Panel[] = [
    {
        name: 'Jenkins Status',
        viz: 'stat',
        meaning: 'Big UP / DOWN tile — is the controller alive? Reads the latest liveness sample over the past week so it stays green even with sparse scrapes.',
        img: 'jenkins-status.png',
        srcs: [{ label: 'default_jenkins_up', anchor: 'up' }],
    },
    {
        name: 'Build Result Tallies',
        viz: 'stat',
        meaning: 'Five stat tiles in a row — Total, Successful, Failed, Aborted, Unstable Builds. Each tile counts builds by their last result code (0=SUCCESS, 1=UNSTABLE, 2=FAILURE, 4=ABORTED); Total covers all builds.',
        img: 'builds.png',
        srcs: [{ label: 'last_build_result_ordinal', anchor: 'result-ordinal' }],
    },
    {
        name: 'Jenkins Job Health',
        viz: 'stat',
        meaning: 'Average job weather score (0–100) across all pipelines — Jenkins’ own blend of recent success rate and stability.',
        img: 'job-health.png',
        srcs: [{ label: 'health_score', anchor: 'health-score' }],
    },
    {
        name: 'Registered Pipelines',
        viz: 'table',
        meaning: 'One row per pipeline + branch: last result, last build time, and build duration. Joins three instant queries on the job label.',
        img: 'registered-pipelines.png',
        srcs: [
            { label: 'last_build_result_ordinal', anchor: 'result-ordinal' },
            { label: 'last_build_duration', anchor: 'last-build-duration' },
            { label: 'last_build_start_time', anchor: 'last-build-start-time' },
        ],
    },
    {
        name: 'Weekly Build Activity by Pipeline × Result',
        viz: 'timeseries',
        meaning: 'Daily build counts split by pipeline and result, from increase() over the build-duration summary counter.',
        img: 'weekly-build-activity.png',
        srcs: [{ label: 'duration_summary_count', anchor: 'duration-summary-count' }],
    },
    {
        name: 'Pipeline Stage Avg Duration',
        viz: 'barchart',
        meaning: 'Average duration of each declarative stage this week (Build, Lint, Test, Checkout…), as sum / count by stage.',
        img: 'stage-avg-duration.png',
        srcs: [{ label: 'last_stage_duration_summary', anchor: 'stage-duration-summary' }],
    },
];
export function meta() { return [{ title: "Grafana / Jenkins Overview — CI/CD Pipeline" }, { name: 'description', content: "Panel-by-panel breakdown of the Jenkins Overview row group: controller status, build result tallies, registered pipelines, weekly build activity and stage durations." }, { property: 'og:title', content: "Grafana / Jenkins Overview — CI/CD Pipeline" }, { property: 'og:description', content: "Panel-by-panel breakdown of the Jenkins Overview row group: controller status, build result tallies, registered pipelines, weekly build activity and stage durations." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-grafana-jenkins-overview" title="Grafana / Jenkins Overview — CI/CD Pipeline" description="Panel-by-panel breakdown of the Jenkins Overview row group: controller status, build result tallies, registered pipelines, weekly build activity and stage durations." breadcrumbs={breadcrumbs}>

  <div className="header">
    <div>
      <div className="prompt">$ open grafana://jenkins-overview</div>
      <h1>Jenkins Overview</h1>
      <div className="subtitle">CI / build health · row group · {panels.length} panels · scope: jenkins_job=~"Jenkins-Test-Pipeline/.*"</div>
    </div>
    <div className="header-meta">
      <div className="row">datasource: <b>grafanacloud-prom</b></div>
      <div className="row">panels: <b>{panels.length}</b></div>
    </div>
  </div>

  <p style={cssStyle("font-size: 13px; color: var(--text-dim); line-height: 1.6; margin: 0 0 24px; max-width: 760px;")}>
    The headline group: at a glance, is Jenkins up, are builds passing, and how busy has the week been?
    Every panel below maps to a Prometheus metric — click a metric chip to jump to its definition in the
    <a href="/projects/ci-cd/prometheus/" style={cssStyle("color: var(--blue);")}>metric catalog</a>.
  </p>

  <div className="section-label">── ./panels</div>
  <PanelGrid panels={panels} accent="green" dir="jenkins-overview"/>

  <div style={cssStyle("margin-top: 28px; display: flex; gap: 18px; flex-wrap: wrap; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/grafana/server-resources" style={cssStyle("color: var(--purple);")}>→ Server Resources group</a>
    <a href="/projects/ci-cd/prometheus/" style={cssStyle("color: var(--blue);")}>→ Prometheus metric catalog</a>
    <a href="/projects/ci-cd/grafana/" style={cssStyle("color: var(--text-dim);")}>← back to Grafana</a>
  </div>

    </DocumentLayout>
    </>);
}
