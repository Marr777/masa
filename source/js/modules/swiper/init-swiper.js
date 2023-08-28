import Swiper from '../../vendor/swiper.js';

export const initSwiper = () => {
  const heroSwiper = new Swiper('.hero__swiper', {
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
      clickable: true,
    },
    keyboard: true,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },

    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',
  });

  heroSwiper.enable();
};


// const header = document.querySelector('.header');
// const hero = document.querySelector('.hero');
// const heroSlide = hero.querySelectorAll('.hero__slide');


// const setMargin = () => {
//   if (!header.classList.contains('header--open')) {
//     hero.style.marginTop = `-${header.offsetHeight}px`;
//     heroSlide.forEach((slide) => {
//       slide.style.paddingTop = `${header.offsetHeight}px`;
//     });
//   }
// };

// const observeMutations = () => {
//   const target = new MutationObserver(setMargin);

//   target.observe(header, {
//     childList: true,
//     subtree: true,
//   });
// };

// export const initHeroMargin = () => {
//   if (!header.classList.contains('header--open')) {
//     observeMutations();
//     setMargin();
//     window.addEventListener('resize', () => {
//       setMargin();
//     });
//   }
// };
