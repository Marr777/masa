import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordions} from './modules/accordions/init-accordion';
import {initMainMenu} from './modules/main-menu/init-main-menu';
import {initSwiper} from './modules/swiper/init-swiper';
import {CustomSelect} from './modules/select/custom-select';
import {initNews} from './modules/news/news';
import {setMap} from './modules/map/set-map';
import {initTitleBreak} from './modules/about-features/init-title-break';
import {initFocus} from './modules/modals/inputFocus';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
    initFocus();
    initAccordions();
    initMainMenu();
    initSwiper();
    initNews();
    initTitleBreak();
    setMap();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    if (window.form) {
      window.form = form;
    }
    form.init();
  });
});
