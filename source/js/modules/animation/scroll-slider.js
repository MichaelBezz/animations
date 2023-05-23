import {gsap} from '../../vendor/gsap/gsap.min.js';
import {ScrollTrigger} from '../../vendor/gsap/scroll-trigger.min.js';
import {pageScroller} from '../../utils/page-scroller';
import {resizeObserver} from '../../utils/observers';

export class ScrollSlider {
  constructor(slider) {
    if (!slider) {
      return;
    }

    this.container = slider;
    this.slides = this.container.querySelectorAll('[data-scroll-slider="slide"]');
    this.slidesCount = this.slides.length;
    this.slides[0].classList.add('is-active');

    this.currentSlide = 0;
    this.timeline = null;

    this.setSlider = this.setSlider.bind(this);
    this.switchSlide = this.switchSlide.bind(this);
    this.init();
  }

  switchSlide(scroll = 0) {
    if (scroll.progress === 0) {
      this.currentSlide = 0;
    } else {
      this.currentSlide = Math.ceil(scroll.progress / (1 / this.slidesCount)) - 1;
    }

    [...this.slides].map((slide) => slide.classList.remove('is-active'));
    this.slides[this.currentSlide].classList.add('is-active');
  }

  updateHeight() {
    this.height = this.slidesCount * window.innerHeight;
    this.container.style.minHeight = this.height + 'px';
  }

  setSlider() {
    this.updateHeight();

    if (this.timeline) {
      this.timeline.kill();
      this.timeline = null;
    }

    this.timeline = gsap.timeline({
      paused: true,
    });

    ScrollTrigger.create({
      scroller: pageScroller,
      trigger: this.container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: this.switchSlide,
      animation: this.timeline,
    });
  }

  init() {
    this.setSlider();
    resizeObserver.subscribe(this.setSlider);
  }
}
