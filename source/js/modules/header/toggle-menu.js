export const initToggleMenu = function () {
  const header = document.querySelector('.header');
  const menuToggle = header.querySelector('[data-menu="toggle"]');
  const menuNavigation = header.querySelector('[data-menu="navigation"]');

  if (!header || !menuToggle || !menuNavigation) {
    return;
  }

  let isMenuOpen = false;

  const closeMenu = function () {
    header.classList.remove('is-active');
    menuToggle.classList.remove('is-active');
    menuNavigation.classList.remove('is-active');

    window.scrollLock.enableScrolling();
    isMenuOpen = false;
  };

  const openMenu = function () {
    header.classList.add('is-active');
    menuToggle.classList.add('is-active');
    menuNavigation.classList.add('is-active');

    window.scrollLock.disableScrolling();
    isMenuOpen = true;
  };

  const toggleMenu = function () {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuToggle.addEventListener('click', toggleMenu);
};
