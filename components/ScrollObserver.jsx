'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            // 🖌️ Handle background color changes
            const sectionClass = entry.target.getAttribute('data-section-class');
            if (sectionClass) {
              document.body.classList.remove(
                'odd-section-bg',
                'even-section-bg'
              );
              document.body.classList.add(sectionClass);
            }

            // 🎭 Handle animations
            const animatedElements = entry.target.querySelectorAll(
              '.slide-in-bottom, .slide-in-top, .slide-in-left, .slide-in-right'
            );
            animatedElements.forEach((el) => {
              el.classList.add('animate-in-view');
            });
            // } else {
            //   // 🛑 Optionally reset animations when section goes out of view
            //   const animatedElements = entry.target.querySelectorAll(
            //     '.slide-in-bottom, .slide-in-top'
            //   );
            //   animatedElements.forEach((el) => {
            //     el.classList.remove('animate-in-view');
            //   });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null;
}
