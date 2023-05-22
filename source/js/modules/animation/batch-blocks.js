import {gsap} from '../../vendor/gsap/gsap.min.js';
import {ScrollTrigger} from '../../vendor/gsap/scroll-trigger.min.js';
import {pageScroller} from '../../utils/page-scroller';

ScrollTrigger.batch('[data-animate="fade"]', {
  onEnter: () => {
    return gsap.to('[data-animate="fade"] [data-animate-item]', {
      autoAlpha: 1,
      duration: 0.45,
      stagger: 0.1,
    });
  },
  start: 'top center',
  scroller: pageScroller,
});

ScrollTrigger.batch('[data-animate="fadeIn"]', {
  onEnter: () => {
    return gsap.to('[data-animate="fadeIn"] [data-animate-item]', {
      autoAlpha: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.1,
    });
  },
  start: 'top center',
  scroller: pageScroller,
});

ScrollTrigger.batch('[data-animate="fadeScale"]', {
  onEnter: () => {
    return gsap.to('[data-animate="fadeScale"] [data-animate-item]', {
      autoAlpha: 1,
      scale: 1,
      duration: 0.45,
      ease: 'back.out(1.5)',
      stagger: 0.1,
    });
  },
  start: 'top center',
  scroller: pageScroller,
});
