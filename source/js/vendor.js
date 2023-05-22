// Swiper 7.4.1
// import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import Splitting from './vendor/splitting.min.js';
import {gsap} from './vendor/gsap/gsap.min.js';
import {ScrollTrigger} from './vendor/gsap/scroll-trigger.min.js';

gsap.registerPlugin(ScrollTrigger);

const splitting = new Splitting({
  by: 'lines',
});
