import { gsap } from 'gsap';
import { delay } from '../utils';
import SplitType from 'split-type';

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

  const HeroText = new SplitType('.feature-title', { types: 'words' });

  gsap.fromTo(HeroText.words, { opacity: 0, y: 50 }, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    ease: "circ.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".features",
      start: "top top",
      end: "bottom 110%",
      scrub: true
    }
  });
}