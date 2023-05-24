import {gsap} from '../../vendor/gsap/gsap.min.js';

export const initIntroAnimations = () => {
  const animateIntro = document.querySelector('[data-animate="intro"]');
  const animateCard = document.querySelectorAll('[data-card="intro"]');

  if (!animateIntro || !animateCard) {
    return;
  }

  const isShown = animateIntro.classList.contains('is-shown');

  if (isShown) {
    gsap.to(animateCard, {opacity: 1, scale: 1, delay: 0.35, stagger: 0.05});
  }
};
