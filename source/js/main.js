import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordions} from './modules/accordions/init-accordion';
import {initMainMenu} from './modules/main-menu/init-main-menu';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
    initAccordions();
    initMainMenu();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
