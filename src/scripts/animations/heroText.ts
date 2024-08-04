import SplitType from "split-type";
import { gsap } from 'gsap';
import { delay } from "../utils";

export const heroText = async () => {
  await delay(1000);

  const text1 = new SplitType('.hero h1', { types: 'chars' });
  const text2 = new SplitType('.hero h2', { types: 'chars' });

  const heroText = document.querySelector('.heroText') as HTMLElement

  gsap.from(text1.chars, {
    opacity: 0,
    y: 50,
    stagger: 0.05,
    ease: "back.out(1.5)",
    duration: 1
  });

  gsap.from(text2.chars, {
    opacity: 0,
    y: 50,
    stagger: 0.05,
    ease: "elastic.out(0.5)",
    duration: 1,
    delay: 1
  });

  gsap.from(heroText.querySelector('button'), {
    opacity: 0,
    y: 50,
    ease: "back.out(1.5)",
    duration: 1,
    delay: 2
  });

  if (heroText) {
    //await delay(10000);
    heroText.style.opacity = '1';
  }
}