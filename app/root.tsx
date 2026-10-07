import type { ReactNode } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "react-router";
import "./styles/tokens.css";
import "./styles/fonts.css";
import "./styles/global.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f9f9f6" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preload" href="/fonts/space-grotesk-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main className="error-page">
      <p className="eyebrow">CHRIS PARK</p>
      <h1>{notFound ? "A little off course." : "Something went wrong."}</h1>
      <p>
        {notFound
          ? "This page could not be found. Try returning to the homepage."
          : "Please refresh the page and try again."}
      </p>
      <a className="button button-dark" href="/">
        Back to home <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
