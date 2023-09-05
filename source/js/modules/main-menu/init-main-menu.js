import { Accordions } from "../accordions/accordions";

const body = document.body;
const header = document.querySelector('[data-header="header"]');
const headerList = header.querySelector('[data-header="header-list"]');
const headerInner = header.querySelector('[data-header="header-inner"]');
const burgerBtn = header.querySelector('[data-header="header-btn"]');
const burgerIcon = burgerBtn.querySelector('.header__burger-icon');
const headerContent = header.querySelector('[data-header="header-content"]');
const dropDownBtns = document.querySelectorAll('[data-header="dropdown-button"]');

const openMenu = () => {
  const accordions = new Accordions();
  header.classList.add('header--open');
  header.dataset.accordion = 'header-button';
  headerInner.classList.add('header__nav--open');
  burgerBtn.classList.add('header__burger--open');
  burgerIcon.classList.add('header__burger-icon--open');
  headerContent.classList.remove('header__nav-inner--closed');
  setTimeout(() => {
    accordions.openAccordion(headerInner);
  }, '50');
  body.classList.add('scroll-lock');
};

const closeMenu = () => {
  const accordions = new Accordions();
  header.classList.remove('header--open');
  headerInner.classList.remove('header__nav--open');
  burgerBtn.classList.remove('header__burger--open');
  burgerIcon.classList.remove('header__burger-icon--open');
  headerContent.classList.add('header__nav-inner--closed');
  setTimeout(() => {
    accordions.closeAccordion(headerInner);
    accordions.closeAllAccordion(headerList);
  }, '50');
  body.classList.remove('scroll-lock');
};

const onBurgerBtnClick = () => {
  if (header.classList.contains('header--open')) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onOverlayClick = (evt) => {
  const accordions = new Accordions();
  if (!evt.target.closest('.header__nav') || evt.target.matches('.header__nav-link')) {
    setTimeout(() => {
      accordions.closeAccordion(headerInner);
      accordions.closeAllAccordion(headerList);
    }, '50');
    closeMenu();
  }
};

// const openDropdownMenu = (btn) => {
//   const accordions = new Accordions();
//   accordions.openAccordion(btn);
// };

// const closeDropdownMenu = (btn) => {
//   const accordions = new Accordions();
//   accordions.closeAccordion(btn);
// };


// const setDropdownMenu = (item) => {
//   if (item.classList.contains('is-active')) {
//     closeDropdownMenu(item);
//   } else {
//     openDropdownMenu(item);
//   }
// };

const initDropdownClick = () => {
  dropDownBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const accordions = new Accordions();
      if (btn.classList.contains('is-active')) {
        setTimeout(() => {
          accordions.closeAccordion(btn);
        }, '50');
      } else {
        setTimeout(() => {
          accordions.openAccordion(btn);
        }, '50');
      }
    });
  });
};

export const initMainMenu = () => {
  burgerBtn.addEventListener('click', onBurgerBtnClick);
  header.addEventListener('click', onOverlayClick);
  initDropdownClick();
};
