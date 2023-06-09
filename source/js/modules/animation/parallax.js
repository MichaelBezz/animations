import {gsap} from '../../vendor/gsap/gsap.min.js';
import {ScrollTrigger} from '../../vendor/gsap/scroll-trigger.min.js';
import {pageScroller} from '../../utils/page-scroller';

const vp767 = window.matchMedia('(max-width: 767px)');

const fadeScaleParallax = () => {
  const items = document.querySelectorAll('[data-parallax="fadeScale"]');

  if (!items.length) {
    return;
  }

  items.forEach((item) => {
    const animateContainer = item.querySelector('[data-parallax-item]');

    gsap.set(animateContainer, {
      opacity: 0,
      scale: 0.7,
    });

    const tl = gsap.to(animateContainer, {
      opacity: 1,
      scale: 1,
    });

    ScrollTrigger.create({
      trigger: item,
      scroller: pageScroller,
      start: 'top bottom',
      end: vp767.matches ? 'center center' : 'top center',
      scrub: true,
      animation: tl,
    });
  });
};

const transformYParallax = () => {
  const items = document.querySelectorAll('[data-parallax="transformY"]');

  if (!items.length) {
    return;
  }

  items.forEach((item) => {
    const animateContainer = item.querySelector('[data-parallax-item]');

    gsap.set(animateContainer, {
      y: item.dataset.from ? item.dataset.from : '100%',
      z: 0,
    });

    const tl = gsap.to(animateContainer, {
      y: 0,
    });

    ScrollTrigger.create({
      trigger: item,
      scroller: pageScroller,
      start: 'top bottom',
      end: vp767.matches ? 'center center' : 'top center',
      scrub: true,
      animation: tl,
    });
  });
};

export const initParallaxComponents = () => {
  fadeScaleParallax();
  transformYParallax();
};
