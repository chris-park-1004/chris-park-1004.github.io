import { Arrow } from '../../components/Icons';

const contacts = [
  { kind: 'email', label: 'Email', detail: 'honggyupark1004@gmail.com', href: 'mailto:honggyupark1004@gmail.com' },
  { kind: 'linkedin', label: 'LinkedIn', detail: 'Honggyu Park', href: 'https://linkedin.com/in/honggyu-park-b68627249' },
  { kind: 'github', label: 'GitHub', detail: 'chris-park-1004', href: 'https://github.com/chris-park-1004' },
] as const;

function ContactIcon({ kind }: { kind: typeof contacts[number]['kind'] }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'email' ? <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>
      : kind === 'linkedin' ? <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M7.5 10v7M12 17v-7m0 3a2.5 2.5 0 0 1 5 0v4" /><circle cx="7.5" cy="7" r=".6" fill="currentColor" /></>
      : <><circle cx="7" cy="6" r="2.5" /><circle cx="7" cy="18" r="2.5" /><circle cx="17" cy="6" r="2.5" /><path d="M7 8.5v7m10-7v1a5 5 0 0 1-5 5H7" /></>}
  </svg>;
}

export default function ContactCard({ id }: { id?: string }) {
  return <div className="card endpoints-card" id={id}>
    {contacts.map(contact => <a className="contact-entry" key={contact.kind} href={contact.href}
      target={contact.kind === 'email' ? undefined : '_blank'} rel={contact.kind === 'email' ? undefined : 'noopener noreferrer'}>
      <span className="contact-symbol"><ContactIcon kind={contact.kind} /></span>
      <span className="contact-copy"><span className="contact-name">{contact.label}</span><span className="contact-detail">{contact.detail}</span></span>
      <span className="contact-arrow"><Arrow /></span>
    </a>)}
  </div>;
}
