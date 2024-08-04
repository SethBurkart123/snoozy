import { gsap } from 'gsap';
import { delay } from '../utils';

export const heroScroll = async () => {
  // Hero image parallax effect
  gsap.to("#heroForeground", {
    y: "20%",
    scale: 0.95,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Background image zoom effect
  gsap.fromTo("#heroBackground",
    {
      scale: 1,
      borderRadius: "2.5rem",
    },
    {
      scale: 1.1,
      borderRadius: "1rem",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      }
    }
  );

  // Fade out effect as user scrolls down
  gsap.to(".hero", {
    opacity: 0.5,
    scrollTrigger: {
      trigger: ".hero",
      start: "center center",
      end: "bottom top",
      scrub: true
    }
  });


  await delay(800)
  gsap.fromTo(".heroText", 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        end: "center center",
        scrub: true
      }
    }
  );
}