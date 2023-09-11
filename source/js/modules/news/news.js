import Swiper from '../../vendor/swiper.js';

const btnContainer = document.querySelector('[data-news="btn-container"]');
const newsBtns = btnContainer.querySelectorAll('[data-name="news-btn"]');
const newsSlides = document.querySelectorAll('[data-news="slide"]');

let newsSlider;

const setNewsSwiper = () => {
  newsSlider = new Swiper('.news__swiper', {
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
};

const onBtnContainerClick = (evt) => {
  const currentBtn = evt.target.closest('[data-name="news-btn"]');
  if (!currentBtn.classList.contains('news__button--active')) {
    newsBtns.forEach((btn) => btn.classList.remove('news__button--active'));
    currentBtn.classList.add('news__button--active');
  }
  if (currentBtn.dataset.filter === 'all') {
    newsSlides.forEach((slide) => {
      slide.style.opacity = '0';
      slide.style.display = 'block';
      setTimeout(() => {
        slide.style.opacity = '1';
      }, 300);
      return;
    });
  } else {
    newsSlides.forEach((slide) => {
      slide.style.opacity = '0';
      slide.style.display = 'block';
      if (slide.dataset.filter !== currentBtn.dataset.filter) {
        slide.style.display = 'none';
      }
      setTimeout(() => {
        slide.style.opacity = '1';
      }, 300);
    });
  }
  newsSlider.update();
};

const initNewsBtns = () => {
  if (btnContainer && newsBtns) {
    btnContainer.addEventListener('click', onBtnContainerClick);
  }
};

export const initNews = () => {
  setNewsSwiper();
  initNewsBtns();
};
