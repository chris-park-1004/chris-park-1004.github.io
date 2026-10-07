export function SocialIcon({ kind }: { kind: "github" | "linkedin" }) {
  return <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    {kind === 'github' ? <path d="M12 1C5.9 1 1 5.9 1 12c0 4.9 3.2 9 7.5 10.5.6.1.8-.2.8-.5v-1.9c-3.1.7-3.7-1.5-3.7-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.4-.3-5-1.2-5-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5 5.5.4.3.8 1 .8 2v3c0 .3.2.6.8.5C19.8 21 23 16.9 23 12c0-6.1-4.9-11-11-11z" />
      : <><path d="M5 8H2v14h3ZM3.5 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8h3v2c.8-1.5 2.2-2.3 4-2.3 4 0 5 2.6 5 6V22h-3.5v-7.4c0-2-.4-3.6-2.6-3.6-2.1 0-2.4 1.8-2.4 3.5V22H8Z" /></>}
  </svg>;
}

export function NavIcon({ kind }: { kind: "work" | "about" | "contact" }) {
  return (
    <svg className="nav-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {kind === "work" ? (
        <>
          <rect x="3" y="7" width="18" height="14" rx="3" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a24 24 0 0 0 18 0M12 12v3" />
        </>
      ) : kind === "about" ? (
        <>
          <circle cx="12" cy="7" r="4" />
          <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
        </>
      ) : (
        <>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7 8 6 8-6" />
        </>
      )}
    </svg>
  );
}

export function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export function Mark() {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="m10 5-7 9 7 9M18 5l7 9-7 9M16 4l-4 20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
