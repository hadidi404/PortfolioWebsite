'use client';

import { useRef, useCallback, useEffect } from 'react';

type Options = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
};
export default function useRevealGroup(options: Options = { threshold: 0.15 }) {
  const elements = useRef<Set<Element>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastScrollY = useRef(0);

  const register = useCallback((el: Element | null) => {
    if (!el) return;
    elements.current.add(el);
    if (observerRef.current) observerRef.current.observe(el);
  }, []);

  useEffect(() => {
    const { threshold = 0.15, root = null, rootMargin = '0px' } = options as Options;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const scrollingUp = currentScrollY < lastScrollY.current;
        lastScrollY.current = currentScrollY;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // element entered viewport -> make visible
            entry.target.classList.add('is-visible');
            
            // If scrolling up, remove stagger delay for instant reveal
            if (scrollingUp) {
              (entry.target as HTMLElement).style.transitionDelay = '0ms';
            } else {
              // Scrolling down - restore original delay from CSS
              (entry.target as HTMLElement).style.transitionDelay = '';
            }
          } else {
            // element left viewport -> remove visible class so animation can re-trigger
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold, root: root as Element | null, rootMargin }
    );

    elements.current.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      elements.current.clear();
    };
  }, [options.threshold, options.root, options.rootMargin]);

  return register;
}
