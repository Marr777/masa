import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordions} from './modules/accordions/init-accordion';
import {initMainMenu} from './modules/main-menu/init-main-menu';
import {initSwiper} from './modules/swiper/init-swiper';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
    initAccordions();
    initMainMenu();
    initSwiper();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
