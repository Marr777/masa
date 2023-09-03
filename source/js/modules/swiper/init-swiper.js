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
    cssMode: 'true',

    navigation: {
      nextEl: '.news__swiper-btn--next',
      prevEl: '.news__swiper-btn--prev',
    },

    pagination: {
      el: '.news__pagination',
      clickable: true,
      bulletClass: 'news__pagination-btn',
      bulletActiveClass: 'news__pagination-btn--active',
      renderBullet: (index, className) => {
        return '<button class="' + className + '">' + (index + 1) + '</button>';
      },
    },

    breakpoints: {
      1200: {
        slidesPerView: 'auto',
      },
      768: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
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
