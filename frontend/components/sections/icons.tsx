// Minimal icon set to avoid pulling in a large icon library.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function IconSparkles(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        d="M12 6.5 13.8 3l1.8 3.5L19 8l-3.4 1.6L13.8 13 12 9.5 10.2 13 8.4 9.6 5 8l3.4-1.5L10.2 3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 16l-.7 1.4L3 18l1.3.6L5 20l.6-1.4L7 18l-1.4-.6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m17 16 1-1 1 1 1-1-1 1 1 1-1-1-1 1 1-1z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconNotebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h6M8 15h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDevices(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="4" width="13" height="14" rx="2" />
      <path d="M22 8h-5v8h5z" />
      <path d="M8 20h5" strokeLinecap="round" />
    </svg>
  );
}

export function IconTransform(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4 18h8v2l4-3-4-3v2H4zm16-12h-8V4l-4 3 4 3V8h8z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="6" r="1" />
      <circle cx="18" cy="18" r="1" />
    </svg>
  );
}
