'use client';

import { useRef, useCallback, useEffect } from 'react';

type Options = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  once?: boolean;
};

export default function useRevealGroup(options: Options = { threshold: 0.15, once: true }) {
  const elements = useRef<Set<Element>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const register = useCallback((el: Element | null) => {
    if (!el) return;
    elements.current.add(el);
    if (observerRef.current) observerRef.current.observe(el);
  }, []);

  useEffect(() => {
    const { once = true, threshold = 0.15, root = null, rootMargin = '0px' } = options as Options;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) observerRef.current?.unobserve(entry.target);
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
  }, [options.threshold, options.root, options.rootMargin, options.once]);

  return register;
}
