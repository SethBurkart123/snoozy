import { gsap } from 'gsap';

function hideLoadingScreen() {
  gsap.to("#loading-screen > div", {
    y: "-100vh",
    scale: 1.5,
    opacity: 0,
    duration: 1,
    ease: "circ.inOut",
  });

  gsap.to("#loading-screen", {
    y: "100%",
    duration: 1,
    ease: "circ.inOut",
  });
}

export async function loadingScreen() {
  const preloadImages = document.querySelectorAll('.preloadImg') as NodeListOf<HTMLImageElement>;
  const imagePromises = Array.from(preloadImages).map(img => {
    if (img.complete) {
      return Promise.resolve();
    } else {
      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }
  });

  const minLoadingTime = new Promise(resolve => setTimeout(resolve, 500));

  await Promise.all([...imagePromises, minLoadingTime]).then(hideLoadingScreen);
  return;
}