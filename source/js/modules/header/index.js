import {resizeObserver} from '../../utils/observers';
import {setHeaderHeight} from './header-height';
import {initToggleMenu} from './toggle-menu';

export const initHeaderModules = () => {
  initToggleMenu();
  setHeaderHeight();
  resizeObserver.subscribe(setHeaderHeight);
};
