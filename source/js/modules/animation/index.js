import {ScrollSlider} from './scroll-slider';
import {generateTimeline} from './generate-timeline';
import {initParallaxComponents} from './parallax';
import {initScrollTo} from './scroll-to';
import {initIntroAnimations} from './intro-animations';
import './batch-blocks';

export const initAnimationModules = () => {
  const sliderContainer = document.querySelector('[data-scroll-slider="parent"]');
  const scrollSlider = new ScrollSlider(sliderContainer);
  generateTimeline();
  initParallaxComponents();
  initScrollTo();
  initIntroAnimations();
};
