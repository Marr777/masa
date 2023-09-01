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

  const programsSwiper = new Swiper('.programs__swiper', {
    keyboard: true,
    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',

    scrollbar: {
      el: '.programs__scrollbar',
      draggable: true,
      dragSize: 392,
      hide: false,
    },

    navigation: {
      nextEl: '.programs__swiper-btn--next',
      prevEl: '.programs__swiper-btn--prev',
    },

    breakpoints: {
      1259: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 'auto',
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        slidesPerView: 1,
        scrollbar: {
          el: '',
          enabled: false,
        },
      },
    },
  });

  const newsSwiper = new Swiper('.news__swiper', {
    keyboard: true,
    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',

    // navigation: {
    //   nextEl: '.programs__swiper-btn--next',
    //   prevEl: '.programs__swiper-btn--prev',
    // },

    slidesPerView: 'auto',

    // breakpoints: {
    //   1200: {
    //     slidesPerView: 3,
    //     spaceBetween: 32,
    //   },
    //   768: {
    //     spaceBetween: 30,
    //     slidesPerView: 'auto',
    //   },
    //   320: {
    //     slidesPerView: 1,
    //   },
    // },
  });


  heroSwiper.enable();
  programsSwiper.enable();
  newsSwiper.enable();
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
