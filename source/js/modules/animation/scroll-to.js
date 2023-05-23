import {gsap} from '../../vendor/gsap/gsap.min.js';
import {ScrollToPlugin} from '../../vendor/gsap/scroll-to.min.js';
import {pageScroller} from '../../utils/page-scroller';

const header = document.querySelector('.header');

const setOffset = (offset) => {
  if (offset === 'header') {
    if (!header) {
      return 0; // если нет header, отступ = 0
    }

    return header.getBoundingClientRect().height; // отступ = высота header
  }

  return offset;
};

const scrollToHandler = (event) => {
  event.preventDefault();
  const button = event.target.closest('[data-move-to]');

  const target = document.querySelector(button.dataset.moveTo);

  const options = {
    duration: Math.abs(button.getBoundingClientRect().top - target.getBoundingClientRect().top) / (window.innerHeight * 1.5),
    offset: button.dataset.offset ? setOffset(button.dataset.offset) : 0,
  };

  gsap.to(pageScroller === 'body' ? window : pageScroller, options.duration, {
    scrollTo: {
      y: target,
      offsetY: options.offset,
    },
    ease: 'power4.out',
  });
};

export const initScrollTo = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const scrollToButtons = document.querySelectorAll('[data-move-to]');

  scrollToButtons.forEach((button) => {
    button.addEventListener('click', scrollToHandler);
  });
};
