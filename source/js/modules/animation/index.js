import {ScrollSlider} from './scroll-slider';
import {generateTimeline} from './generate-timeline';
import {initParallaxComponents} from './parallax';
import './batch-blocks';

export const initAnimationModule = () => {
  const sliderContainer = document.querySelector('[data-scroll-slider="parent"]');
  const scrollSlider = new ScrollSlider(sliderContainer);
  generateTimeline();
  initParallaxComponents();
};
