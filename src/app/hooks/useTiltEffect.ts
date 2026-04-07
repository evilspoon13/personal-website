"use client";

import { useEffect, useRef, useCallback } from 'react';

export default function useTiltEffect(maxTilt = 12) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    // Skip on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handlers: Array<{ el: HTMLDivElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    cardRefs.current.forEach((el) => {
      if (!el) return;

      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
        const rotateX = -(mouseY / (rect.height / 2)) * maxTilt;

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        el.style.transition = 'transform 0.1s ease';

        // Set CSS vars for glow
        const percentX = ((e.clientX - rect.left) / rect.width) * 100;
        const percentY = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--mouse-x', `${percentX}%`);
        el.style.setProperty('--mouse-y', `${percentY}%`);
      };

      const leave = () => {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        el.style.transition = 'transform 0.5s ease';
      };

      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', leave);
      handlers.push({ el, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [maxTilt]);

  return setRef;
}
