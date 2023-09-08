import {Accordions} from '../accordions/accordions';

const body = document.body;
const header = document.querySelector('[data-header="header"]');
const headerList = header.querySelector('[data-header="header-list"]');
const headerInner = header.querySelector('[data-header="header-inner"]');
const burgerBtn = header.querySelector('[data-header="header-btn"]');
const burgerIcon = burgerBtn.querySelector('.header__burger-icon');
const headerContent = header.querySelector('[data-header="header-content"]');
const dropDownBtns = document.querySelectorAll('[data-header="dropdown-button"]');
const navLinks = header.querySelectorAll('[data-header="header-link"]');
const navItems = header.querySelectorAll('[data-header="dropdown-item"]');
const dropdownLinks = header.querySelectorAll('[data-header="header-link-secondary"]');

const openMenu = () => {
  const accordions = new Accordions();
  header.classList.add('header--open');
  header.dataset.accordion = 'header-button';
  headerInner.classList.add('header__nav--open');
  navItems.forEach((item) => {
    item.setAttribute('tabindex', '0');
  });
  navLinks.forEach((link) => {
    link.setAttribute('tabindex', '0');
  });
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
  setTimeout(() => {
    header.classList.remove('header--open');
  }, '380');
  headerInner.classList.remove('header__nav--open');
  navItems.forEach((item) => {
    item.setAttribute('tabindex', '-1');
  });
  navLinks.forEach((link) => {
    link.setAttribute('tabindex', '-1');
  });
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

const initDropdownClick = () => {
  if (dropDownBtns) {
    dropDownBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const accordions = new Accordions();
        const links = btn.querySelectorAll('[data-header="header-link-secondary"]');
        if (btn.classList.contains('is-active')) {
          setTimeout(() => {
            accordions.closeAccordion(btn);
          }, '50');
          links.forEach((link) => {
            link.setAttribute('tabindex', '-1');
          });
        } else {
          setTimeout(() => {
            accordions.openAccordion(btn);
          }, '50');
          links.forEach((link) => {
            link.setAttribute('tabindex', '0');
          });
        }
      });
    });
  }

};

export const initMainMenu = () => {
  if (navLinks) {
    navLinks.forEach((link) => {
      link.setAttribute('tabindex', '-1');
    });
  }
  if (dropdownLinks) {
    dropdownLinks.forEach((link) => {
      link.setAttribute('tabindex', '-1');
    });
  }
  if (burgerBtn && header) {
    burgerBtn.addEventListener('click', onBurgerBtnClick);
    header.addEventListener('click', onOverlayClick);
    navLinks[navLinks.length - 1].addEventListener('blur', () => {
      const accordions = new Accordions();
      setTimeout(() => {
        accordions.closeAccordion(headerInner);
        accordions.closeAllAccordion(headerList);
      }, '50');
      closeMenu();
    });
  }
  initDropdownClick();
};
