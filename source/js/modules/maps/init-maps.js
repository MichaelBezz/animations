import {initMap1} from './map-1';
import {initMap2} from './map-2';
import {initMap3} from './map-3';

const initDefaultMap = (mapBlock) => {
  window.ymaps.ready(() => {
    const myMap = new window.ymaps.Map(mapBlock,
        {
          center: [55.755819, 37.617644],
          zoom: 15,
          behaviors: ['drag', 'multiTouch'],
        },
        {
          suppressMapOpenBlock: true,
          searchControlProvider: 'yandex#search',
        }
    );
  });
};

const initSetupMap = (mapId, mapBlock) => {
  switch (mapId) {
    case 'map-3':
      initMap3(mapBlock);
      break;
    case 'map-2':
      initMap2(mapBlock);
      break;
    case 'map-1':
      initMap1(mapBlock);
      break;
    default:
      initDefaultMap(mapBlock);
  }
};

export const initMaps = () => {
  const mapBlocks = document.querySelectorAll('.ya-map__map');

  if (!mapBlocks.length) {
    return;
  }

  mapBlocks.forEach((mapBlock) => {
    const mapId = mapBlock.dataset.map;
    initSetupMap(mapId, mapBlock);
  });
};
