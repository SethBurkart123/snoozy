import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { heroText } from './animations/heroText';
import { heroScroll } from './animations/heroScroll';
import { loadingScreen } from './animations/loadingScreen';

// setup with Lenis
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0)

// animations
async function animate() {
  await loadingScreen();
  heroText();
  heroScroll();
}

animate();