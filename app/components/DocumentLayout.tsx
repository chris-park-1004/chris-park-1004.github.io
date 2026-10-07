import { Fragment, type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../styles/documents.css';
import '../styles/document-layout.css';
import '../styles/document-cards.css';

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
  pageClass: string;
}

export default function DocumentLayout({ children, breadcrumbs, pageClass }: Props) {
  return <>
    <Header home={false} />
    <main id="main" className="documentation wrap">
      <nav className="document-breadcrumbs" aria-label="Breadcrumb">
        {breadcrumbs.map((segment, index) => <Fragment key={segment.href ?? segment.label}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {segment.href ? <a href={segment.href}>{index === 0 ? 'Home' : segment.label}</a> : <span aria-current="page">{segment.label}</span>}
        </Fragment>)}
      </nav>
      <div className={`document-content ${pageClass}${pageClass === 'document-career' ? '' : ' document-cards'}`}>{children}</div>
    </main>
    <Footer />
  </>;
}
