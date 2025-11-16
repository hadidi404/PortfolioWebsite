"use client";

import React, { forwardRef } from 'react';

type CSSVars = React.CSSProperties & {
  '--i'?: number | string;
  '--reveal-step'?: string;
};

type RevealProps = {
  i?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  register?: (el: HTMLElement | null) => void;
  [key: string]: any; // for other HTML attributes
};

/**
 * Typed wrapper for reveal animations that eliminates the need for 'as any' casts.
 * Handles ref registration and CSS custom property typing cleanly.
 * 
 * @param i - The stagger index (sets --i CSS variable)
 * @param className - Additional classes (reveal class is automatically added)
 * @param style - Additional inline styles
 * @param as - HTML element to render (default: 'div')
 * @param register - The register callback from useRevealGroup
 * @param children - Child elements
 */
const Reveal = forwardRef<HTMLElement, RevealProps>(
  ({ i, className = '', style = {}, children, as: Component = 'div', register, ...props }, ref) => {
    const combinedStyle: CSSVars = {
      ...style,
      ...(i !== undefined && { '--i': i }),
    };

    const combinedClassName = `reveal ${className}`.trim();

    return (
      <Component
        ref={(el: HTMLElement | null) => {
          // Handle forwarded ref
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLElement | null>).current = el;
          }
          // Handle register callback
          if (register && el) {
            register(el);
          }
        }}
        className={combinedClassName}
        style={combinedStyle}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Reveal.displayName = 'Reveal';

export default Reveal;
