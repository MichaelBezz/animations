import {initMapPin} from './init-map-pin';
import {initCategoryPins} from './init-map-pins';

export const initMap2 = (mapBlock) => {
  const center = mapBlock.dataset.center.split(', ').map((str) => +str);
  const zoom = +mapBlock.dataset.zoom;
  const controls = mapBlock.dataset.controls ? mapBlock.dataset.controls.split(' ') : [];
  const behaviors = ['drag', 'multiTouch'];

  window.ymaps.ready(() => {
    const myMap = new window.ymaps.Map(mapBlock,
        {
          center,
          zoom,
          controls,
          behaviors,
        },
        {
          autoFitToViewport: 'always',
        }
    );

    initMapPin(mapBlock, myMap, 'small');
    initCategoryPins(mapBlock, myMap);
  });
};
