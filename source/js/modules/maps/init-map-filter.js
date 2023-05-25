export const initMapFilter = (mapBlock) => {
  const list = document.querySelector('.map-filter');

  const getMapFilter = (element) => {
    const allPins = window.ymaps.geoQuery(mapBlock.geoObjects);

    if (element === 'all') {
      allPins.each((pm) => {
        pm.options.set('visible', true);
      });

      return;
    }

    const arr = [];

    allPins.each((pm) => {
      if (pm.options.get('placemarkType') === 'object') {
        return;
      }

      if (pm.options.get('placemarkType') === element) {
        pm.options.set('visible', true);
        arr.push(pm.balloon.isOpen());
      } else {
        pm.options.set('visible', false);
      }

      if (pm.options.get('placemarkType') === 'mainPin') {
        pm.options.set('visible', true);
      }
    });

    if (!arr.includes(true)) {
      mapBlock.balloon.close();
    }
  };

  list.addEventListener('change', (event) => {
    event.preventDefault();

    const target = event.target.value;

    if (!target) {
      return;
    }

    getMapFilter(target);
  });
};
