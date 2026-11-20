import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const makeVisible = (element) => {
      element.classList.add('visible');
    };

    // If IntersectionObserver is not supported, reveal all immediately
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(makeVisible);
      return;
    }

    const checkVisible = () => {
      reveals.forEach((element) => {
        if (!element.classList.contains('visible')) {
          const rect = element.getBoundingClientRect();
          // Element top entered viewport or is above viewport
          if (rect.top <= window.innerHeight + 100) {
            makeVisible(element);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight + 100) {
            makeVisible(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 100px 0px'
      }
    );

    // Initial check and observation
    reveals.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 100) {
        makeVisible(element);
      } else {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', checkVisible, { passive: true });
    window.addEventListener('resize', checkVisible, { passive: true });
    window.addEventListener('hashchange', checkVisible, { passive: true });

    // Fallback timer: ensure everything becomes visible after 800ms
    // so user is never left with an empty white page regardless of browser throttling
    const fallbackTimer = setTimeout(() => {
      reveals.forEach(makeVisible);
    }, 800);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisible);
      window.removeEventListener('resize', checkVisible);
      window.removeEventListener('hashchange', checkVisible);
      clearTimeout(fallbackTimer);
    };
  }, []);
}
