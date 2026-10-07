import type { CSSProperties, SyntheticEvent } from 'react';

/** Converts the documentation's authored CSS declarations, including custom properties. */
export function cssStyle(value?: string): CSSProperties | undefined {
  if (!value) return undefined;
  return Object.fromEntries(value.split(';').filter(part => part.includes(':')).map(part => {
    const colon = part.indexOf(':');
    const property = part.slice(0, colon).trim();
    const key = property.startsWith('--') ? property : property.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
    return [key, part.slice(colon + 1).trim()];
  })) as CSSProperties;
}

export function imageFallback(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.hidden = true;
  event.currentTarget.parentElement?.classList.add('shot-pending');
}
