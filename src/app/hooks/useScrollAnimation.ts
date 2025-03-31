"use client";

import { useEffect, RefObject } from 'react';

interface ScrollAnimationOptions {
  rootMargin?: string;
  threshold?: number;
  delay?: number;
}

const useScrollAnimation = <T extends HTMLElement>(
  refs: RefObject<T | null>[] | RefObject<T | null>,
  options: ScrollAnimationOptions = {}
) => {
  useEffect(() => {
    // Early return if running on server
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const { 
      rootMargin = '0px 0px -100px 0px', 
      threshold = 0.15,
      delay = 0
    } = options;
    
    const elements = Array.isArray(refs) ? refs : [refs];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a delay if specified
          if (delay > 0) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          } else {
            entry.target.classList.add('visible');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin, threshold });
    
    // Add elements to observer if they exist
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    // Handle immediate visibility for elements already in viewport on initial load
    const checkInitialVisibility = () => {
      elements.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = 
            rect.top <= window.innerHeight && 
            rect.bottom >= 0 &&
            rect.right >= 0 && 
            rect.left <= window.innerWidth;
          
          if (isVisible) {
            ref.current.classList.add('visible');
            if (observer) observer.unobserve(ref.current);
          }
        }
      });
    };
    
    // Run initial visibility check after a brief delay to ensure DOM is ready
    setTimeout(checkInitialVisibility, 100);
    
    return () => {
      if (observer) {
        elements.forEach((ref) => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });
      }
    };
  }, [refs, options]);
};

export default useScrollAnimation;