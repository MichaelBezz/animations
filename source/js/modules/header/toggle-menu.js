import {clickObserver} from '../../utils/observers';
import {gsap} from '../../vendor/gsap/gsap.min.js';

export const initToggleMenu = () => {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('[data-menu="toggle"]');
  const menuNavigation = document.querySelector('[data-menu="navigation"]');
  const menuLink = document.querySelectorAll('[data-menu="link"]');

  if (!header || !menuToggle || !menuNavigation || !menuLink) {
    return;
  }

  let isMenuOpen = false;
  const tweenOpen = gsap.from(menuLink, {yPercent: 110, delay: 0.4, stagger: 0.08});
  const tweenClose = gsap.to(menuLink, {yPercent: 110, delay: 0.4, stagger: 0, paused: true});

  const closeMenu = () => {
    header.classList.remove('is-active');
    menuToggle.classList.remove('is-active');
    menuNavigation.classList.remove('is-active');
    tweenClose.restart();

    window.scrollLock.enableScrolling();
    isMenuOpen = false;
  };

  const openMenu = () => {
    header.classList.add('is-active');
    menuToggle.classList.add('is-active');
    menuNavigation.classList.add('is-active');
    tweenOpen.restart();

    window.scrollLock.disableScrolling();
    isMenuOpen = true;
  };

  const toggleMenu = (event) => {
    const isMenuToggle = event.target.closest('[data-menu="toggle"]');

    if (!isMenuToggle) {
      return;
    }

    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  clickObserver.subscribe(toggleMenu);
};
