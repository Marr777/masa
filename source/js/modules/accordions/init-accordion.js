import {Accordions} from './accordions';
import {onElementsOverflow} from './accordion-overflow';

let accordions;

const initAccordions = () => {
  accordions = new Accordions();
  // onElementsOverflow();
  // window.addEventListener('resize', onElementsOverflow);
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};
