const header = document.querySelector('[data-header="header"]');
const headerInner = header.querySelector('[data-header="header-inner"]');
const burgerBtn = header.querySelector('[data-header="header-btn"]');
const burgerIcon = burgerBtn.querySelector('.header__burger-icon');
const headerContent = header.querySelector('[data-header="header-content"]');

const openMenu = () => {
  header.classList.add('header--open');
  headerInner.classList.add('header__nav--open');
  burgerBtn.classList.add('header__burger--open');
  burgerIcon.classList.add('header__burger-icon--open');
  headerContent.classList.remove('header__nav-inner--closed');
};

const closeMenu = () => {
  header.classList.remove('header--open');
  headerInner.classList.remove('header__nav--open');
  burgerBtn.classList.remove('header__burger--open');
  burgerIcon.classList.remove('header__burger-icon--open');
  headerContent.classList.add('header__nav-inner--closed');
};

const onBurgerBtnClick = () => {
  if (header.classList.contains('header--open')) {
    closeMenu();
  } else {
    openMenu();
  }
};

export const initMainMenu = () => {
  burgerBtn.addEventListener('click', onBurgerBtnClick);
};
