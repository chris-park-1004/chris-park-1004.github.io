/** Decorative symbols share the quiet icon-tile treatment used on the career page. */
export default function DocCardIcon({ kind = 'document' }: { kind?: string }) {
  const symbol = kind.toLowerCase();
  return <span className="doc-card-icon" aria-hidden="true">
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {symbol.includes('jenkins') || symbol.includes('server') || symbol.includes('agent') ? <><rect x="4" y="3" width="16" height="7" rx="2" /><rect x="4" y="14" width="16" height="7" rx="2" /><path d="M8 6.5h.01M8 17.5h.01M12 10v4" /></>
        : symbol.includes('github') || symbol.includes('webhook') || symbol.includes('branch') ? <><circle cx="6" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" /><path d="M6 7v10m12-10v2a6 6 0 0 1-6 6H6" /></>
        : symbol.includes('cloud') || symbol.includes('tunnel') ? <><path d="M7 18a5 5 0 1 1 1-9 6 6 0 0 1 11 2 3.5 3.5 0 0 1-1 7Z" /></>
        : symbol.includes('grafana') || symbol.includes('prometheus') || symbol.includes('chart') ? <><path d="M3 3v18h18M7 15l4-5 4 3 5-7" /><circle cx="11" cy="10" r="1" /></>
        : symbol.includes('access') || symbol.includes('account') || symbol.includes('app-setup') ? <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z" /><path d="m8 12 3 3 5-6" /></>
        : symbol === 'related' ? <><path d="m10 14 4-4m-6 5-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 3 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" /></>
        : symbol === 'info' ? <><circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10h.01" /></>
        : <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Zm0 0v6h6M8 13h8m-8 4h5" /></>}
    </svg>
  </span>;
}
