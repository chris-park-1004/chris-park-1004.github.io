import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
import RelatedCard from "../../documents/components/RelatedCard";
import ContactCard from "../../documents/components/ContactCard";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'prometheus' },
];
interface Metric {
    anchor: string;
    name: string;
    type: 'gauge' | 'counter' | 'summary';
    meaning: string;
    panels: string;
    sample: string[]; // illustrative exposition lines (not live)
}
// Jenkins Overview dashboard — scoped by jenkins_job=~"Jenkins-Test-Pipeline/.*"
const buildMetrics: Metric[] = [
    {
        anchor: 'up',
        name: 'default_jenkins_up',
        type: 'gauge',
        meaning: 'Controller liveness. 1 = the Jenkins controller is reachable and exporting.',
        panels: 'Jenkins Status',
        sample: [
            'default_jenkins_up 1.0',
        ],
    },
    {
        anchor: 'health-score',
        name: 'default_jenkins_builds_health_score',
        type: 'gauge',
        meaning: "Per-job weather score (0–100). Averaged across pipelines for the headline health number.",
        panels: 'Jenkins Job Health',
        sample: [
            'default_jenkins_builds_health_score{jenkins_job="Jenkins-Test-Pipeline/main"} 60.0',
        ],
    },
    {
        anchor: 'result-ordinal',
        name: 'default_jenkins_builds_last_build_result_ordinal',
        type: 'gauge',
        meaning: 'Result code of the most recent build (see result codes →). Counted by value to derive the Total / Successful / Failed / Aborted / Unstable tiles.',
        panels: 'Total / Successful / Failed / Aborted / Unstable Builds · Registered Pipelines',
        sample: [
            'default_jenkins_builds_last_build_result_ordinal{jenkins_job="Jenkins-Test-Pipeline/main"} 0.0',
            'default_jenkins_builds_last_build_result_ordinal{jenkins_job="Jenkins-Test-Pipeline/feature/send-build-results"} 0.0',
            '# 0 = SUCCESS for all builds',
        ],
    },
    {
        anchor: 'last-build-duration',
        name: 'default_jenkins_builds_last_build_duration_milliseconds',
        type: 'gauge',
        meaning: 'Wall-clock duration of the last build per pipeline+branch.',
        panels: 'Registered Pipelines (Build Duration)',
        sample: [
            'default_jenkins_builds_last_build_duration_milliseconds{jenkins_job="Jenkins-Test-Pipeline/main"} 17211.0',
        ],
    },
    {
        anchor: 'last-build-start-time',
        name: 'default_jenkins_builds_last_build_start_time_milliseconds',
        type: 'gauge',
        meaning: 'Epoch-ms start time of the last build. Rendered as the Last Build Time column.',
        panels: 'Registered Pipelines (Last Build Time)',
        sample: [
            'default_jenkins_builds_last_build_start_time_milliseconds{jenkins_job="Jenkins-Test-Pipeline/main"} 1779719160000',
            '# = 2026-05-25 ~10:26 AM ET',
        ],
    },
    {
        anchor: 'duration-summary-count',
        name: 'default_jenkins_builds_duration_milliseconds_summary_count',
        type: 'summary',
        meaning: 'Cumulative build count, split by the status label (SUCCESS / FAILURE / …). increase() over 1d gives the weekly activity bars.',
        panels: 'Weekly Build Activity by Pipeline × Result',
        sample: [
            'default_jenkins_builds_duration_milliseconds_summary_count{jenkins_job="Jenkins-Test-Pipeline/main",status="SUCCESS"} 5',
            'default_jenkins_builds_duration_milliseconds_summary_count{jenkins_job="Jenkins-Test-Pipeline/main",status="FAILURE"} 2',
        ],
    },
    {
        anchor: 'stage-duration-summary',
        name: 'default_jenkins_builds_last_stage_duration_milliseconds_summary',
        type: 'summary',
        meaning: 'Per-stage duration summary. sum / count by(stage) yields the average duration of each pipeline stage (Build, Lint, Test, …).',
        panels: 'Pipeline Stage Avg Duration',
        sample: [
            '..._summary_sum{stage="Checkout SCM"}   3560.0',
            '..._summary_sum{stage="Build"}         3010.0',
            '..._summary_sum{stage="Test"}          3009.0',
            '..._summary_sum{stage="Lint"}          2872.0',
            '..._summary_sum{stage="Checkout Info"} 2529.0',
            '..._summary_sum{stage="Post Actions"}   858.0',
        ],
    },
];
// Server Resources dashboard — scoped by job="jenkins"
const systemMetrics: Metric[] = [
    {
        anchor: 'cpu-load',
        name: 'vm_cpu_load',
        type: 'gauge',
        meaning: 'Process CPU load (0–1, shown ×100 as %). Drives both the instant tile and the trend line.',
        panels: 'CPU Load · CPU Load Over Time',
        sample: [
            'vm_cpu_load{job="jenkins"} 0.0',
        ],
    },
    {
        anchor: 'heap-usage',
        name: 'vm_memory_heap_usage',
        type: 'gauge',
        meaning: 'Heap utilization ratio (0–1). Shown ×100 on the radial gauge.',
        panels: 'Heap Memory Usage',
        sample: [
            'vm_memory_heap_usage{job="jenkins"} 0.735',
        ],
    },
    {
        anchor: 'heap-used-max',
        name: 'vm_memory_heap_used / heap_max',
        type: 'gauge',
        meaning: 'Used vs. configured-max heap, in bytes. Plotted together against the Xmx ceiling.',
        panels: 'JVM Memory',
        sample: [
            'vm_memory_heap_used{job="jenkins"} 211812352',
            'vm_memory_heap_max{job="jenkins"}  268435456',
            '# 202 MB used of 256 MB',
        ],
    },
    {
        anchor: 'non-heap-used',
        name: 'vm_memory_non_heap_used',
        type: 'gauge',
        meaning: 'Non-heap memory (metaspace, code cache) in bytes.',
        panels: 'JVM Memory',
        sample: [
            'vm_memory_non_heap_used{job="jenkins"} 160432128',
            '# 153 MB',
        ],
    },
    {
        anchor: 'threads-current-peak',
        name: 'jvm_threads_current / peak',
        type: 'gauge',
        meaning: 'Live thread count and the peak since JVM start.',
        panels: 'JVM Threads',
        sample: [
            'jvm_threads_current{job="jenkins"} 39.0',
            'jvm_threads_peak{job="jenkins"}    63.0',
        ],
    },
    {
        anchor: 'threads-state',
        name: 'jvm_threads_state',
        type: 'gauge',
        meaning: 'Thread count broken down by state (RUNNABLE, WAITING, TIMED_WAITING, BLOCKED, …).',
        panels: 'JVM Thread States',
        sample: [
            'jvm_threads_state{job="jenkins",state="WAITING"}       16.0',
            'jvm_threads_state{job="jenkins",state="TIMED_WAITING"} 12.0',
            'jvm_threads_state{job="jenkins",state="RUNNABLE"}      11.0',
            'jvm_threads_state{job="jenkins",state="BLOCKED"}        0.0',
        ],
    },
    {
        anchor: 'threads-deadlocked',
        name: 'jvm_threads_deadlocked',
        type: 'gauge',
        meaning: 'Number of deadlocked threads. Anything above 0 turns the tile red.',
        panels: 'Deadlocked Threads',
        sample: [
            'jvm_threads_deadlocked{job="jenkins"} 0.0',
        ],
    },
    {
        anchor: 'gc-collection',
        name: 'jvm_gc_collection_seconds_sum',
        type: 'counter',
        meaning: 'Cumulative GC time per collector (G1 Young / Old / Concurrent). rate() gives GC pause time per second.',
        panels: 'GC Pause Time / sec',
        sample: [
            'jvm_gc_collection_seconds_sum{job="jenkins",gc="G1 Young Generation"} 7.9',
            'jvm_gc_collection_seconds_sum{job="jenkins",gc="G1 Concurrent GC"}    2.1',
            'jvm_gc_collection_seconds_sum{job="jenkins",gc="G1 Old Generation"}   0.2',
        ],
    },
    {
        anchor: 'file-descriptor',
        name: 'vm_file_descriptor_ratio_x100_window_5m',
        type: 'summary',
        meaning: 'Open file descriptors as a percentage of the OS limit (×100, 5m window).',
        panels: 'File Descriptor Usage',
        sample: [
            'vm_file_descriptor_ratio_x100_window_5m{job="jenkins",quantile="0.5"}  0.0',
            'vm_file_descriptor_ratio_x100_window_5m{job="jenkins",quantile="0.95"} 0.0',
        ],
    },
];
const totalMetrics = buildMetrics.length + systemMetrics.length;
const resultCodes = [
    { code: '0', label: 'SUCCESS', color: 'green' },
    { code: '1', label: 'UNSTABLE', color: 'yellow' },
    { code: '2', label: 'FAILURE', color: 'red' },
    { code: '3', label: 'NOT_BUILT', color: 'dim' },
    { code: '4', label: 'ABORTED', color: 'dim' },
];
export function meta() { return [{ title: "Prometheus — CI/CD Pipeline" }, { name: 'description', content: "What flows from Jenkins to Grafana Cloud: the metric catalog behind the Jenkins Overview and Server Resources dashboards, mapped to the panels that consume each series." }, { property: 'og:title', content: "Prometheus — CI/CD Pipeline" }, { property: 'og:description', content: "What flows from Jenkins to Grafana Cloud: the metric catalog behind the Jenkins Overview and Server Resources dashboards, mapped to the panels that consume each series." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-prometheus" title="Prometheus — CI/CD Pipeline" description="What flows from Jenkins to Grafana Cloud: the metric catalog behind the Jenkins Overview and Server Resources dashboards, mapped to the panels that consume each series." breadcrumbs={breadcrumbs}>

  {/* header */}
  <div className="header">
    <div>
      <div className="prompt">$ curl -s localhost:9090/api/v1/label/__name__/values</div>
      <h1>Prometheus</h1>
      <div className="subtitle">Pull-based metrics · Docker on Jenkins host · remote_write to Grafana Cloud Mimir</div>
    </div>
    <div className="header-meta">
      <div className="row">runtime: <b>Docker</b></div>
      <div className="row">scrape: <b>120s</b></div>
      <div className="row">status: <b style={cssStyle("color:var(--green)")}>● deployed</b></div>
    </div>
  </div>

  {/* summary */}
  <div className="summary">
    <div><div className="k">Metric families</div><div className="v blue">{totalMetrics}</div></div>
    <div><div className="k">Dashboards fed</div><div className="v purple">2</div></div>
    <div><div className="k">Scrape period</div><div className="v green">120s</div></div>
    <div><div className="k">Inbound ports</div><div className="v yellow">0</div></div>
  </div>

  {/* main grid */}
  <div className="grid">
    <div>

      {/* pipeline / data flow */}
      <div className="section-label">── ./pipeline</div>

      <div className="stage" style={cssStyle("--accent: var(--blue); margin-bottom: 28px;")}>
        <div className="stage-body">
          <p>
            All metrics originate from the <b>Jenkins Prometheus plugin</b> running with its default
            configuration — endpoint <code>/prometheus</code>, namespace <code>default</code>, 120s
            collection period. A Prometheus container on the Jenkins host scrapes
            <code>host.docker.internal:8080/prometheus/</code>, then a single <code>remote_write</code>
            block ships everything to Grafana Cloud Mimir. No relabel filtering — what is scraped is what
            Grafana sees. The local endpoint is bound to <code>localhost</code> only, so nothing is exposed inbound.
          </p>
          <div className="stack-tags" style={cssStyle("margin-top: 14px;")}>
            <span className="chip">Jenkins plugin (default)</span>
            <span className="chip">→ scrape 120s</span>
            <span className="chip">→ remote_write</span>
            <span className="chip">→ Grafana Cloud Mimir</span>
          </div>
        </div>
      </div>

      {/* metric catalog */}
      <div className="section-label">── ./metrics</div>

      {/* CI / build group */}
      <div className="stage" style={cssStyle("--accent: var(--green); margin-bottom: 14px;")}>
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <span className="id">group_01</span>
              <span className="badge b-green"><span className="badge-dot"></span>CI / build</span>
            </div>
            <div className="stage-name">Jenkins Overview</div>
            <div className="stage-sub">scope: jenkins_job=~"Jenkins-Test-Pipeline/.*"</div>
          </div>
          <div className="stage-dur">{buildMetrics.length} families</div>
        </div>
        <div className="stage-body">
          <div className="metric-list">
            {buildMetrics.map((m, itemIndex) => (<div id={m.anchor} className="metric-item" key={itemIndex}>
                <div className="metric-item-head">
                  <code>{m.name}</code>
                </div>
                <div className="metric-item-desc">{m.meaning}</div>
                <div className="metric-item-panels">→ {m.panels}</div>
                <details className="metric-sample">
                  <summary>sample snapshot</summary>
                  <pre>{m.sample.join('\n')}</pre>
                </details>
              </div>))}
          </div>
        </div>
      </div>

      {/* JVM / system group */}
      <div className="stage" style={cssStyle("--accent: var(--purple);")}>
        <div className="stage-head">
          <div>
            <div className="stage-meta">
              <span className="id">group_02</span>
              <span className="badge b-purple"><span className="badge-dot"></span>JVM / system</span>
            </div>
            <div className="stage-name">Server Resources</div>
            <div className="stage-sub">scope: job="jenkins"</div>
          </div>
          <div className="stage-dur">{systemMetrics.length} families</div>
        </div>
        <div className="stage-body">
          <div className="metric-list">
            {systemMetrics.map((m, itemIndex) => (<div id={m.anchor} className="metric-item" key={itemIndex}>
                <div className="metric-item-head">
                  <code>{m.name}</code>
                </div>
                <div className="metric-item-desc">{m.meaning}</div>
                <div className="metric-item-panels">→ {m.panels}</div>
                <details className="metric-sample">
                  <summary>sample snapshot</summary>
                  <pre>{m.sample.join('\n')}</pre>
                </details>
              </div>))}
          </div>
        </div>
      </div>

    </div>

    {/* right rail */}
    <div className="rail">

      <div className="section-label">── ./contact</div>
      <ContactCard />

      <div className="section-label">── ./context</div>

      <div className="card">
        <div className="card-label">why prometheus</div>
        <p>
          The Jenkins plugin exposes a ready-made <code>/prometheus</code> endpoint, so the gap between "Jenkins is up" and "I have a dashboard" is just one container plus one scrape job. No custom exporters, no instrumentation code.
        </p>
        <p>
          Running in Docker on the Jenkins host keeps scrape latency near-zero, and binding to <code>localhost</code> means the controller never exposes metrics outside the machine.
        </p>
      </div>

      <div className="card">
        <div className="card-label">result codes</div>
        <p style={cssStyle("font-size: 12px; color: var(--text-dim); line-height: 1.55; margin: 0 0 12px;")}>
          Values of <code>last_build_result_ordinal</code>, counted to build the build-status tiles:
        </p>
        <div style={cssStyle("display:flex; flex-direction:column; gap:7px; font-family:var(--font-mono); font-size:12px;")}>
          {resultCodes.map((r, itemIndex) => (<div style={cssStyle("display:flex; align-items:center; gap:10px;")} key={itemIndex}>
              <span style={cssStyle("color:var(--text-faint); width:14px;")}>{r.code}</span>
              <span className={`badge b-${r.color}`}><span className="badge-dot"></span>{r.label}</span>
            </div>))}
        </div>
      </div>

      <div className="section-label">── ./stack</div>
      <div className="card stack-card">
        <div className="stack-group">
          <div className="cat">Runtime</div>
          <div className="stack-tags">
            <span className="stack-tag">Prometheus 2.x</span>
            <span className="stack-tag">Docker</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Source</div>
          <div className="stack-tags">
            <span className="stack-tag">Jenkins Prometheus plugin</span>
            <span className="stack-tag">host.docker.internal</span>
          </div>
        </div>
      </div>

      <RelatedCard links={[
            { href: '/projects/ci-cd/grafana/', label: '→ Grafana dashboards', color: 'purple' },
            { href: '/projects/ci-cd/jenkins/', label: '→ Jenkins component', color: 'green' },
            { href: '/projects/ci-cd/', label: '← back to project' },
        ]}/>
    </div>
  </div>

    </DocumentLayout>
    </>);
}
