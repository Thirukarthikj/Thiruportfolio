import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    // Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      reveals.forEach((element) => element.classList.add('visible'));
      return;
    }

    const checkVisible = () => {
      reveals.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight + 80 && rect.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 80px 0px'
      }
    );

    reveals.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 80 && rect.bottom >= 0) {
        element.classList.add('visible');
      } else {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', checkVisible, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisible);
    };
  }, []);
}


