const btnContainer = document.querySelector('[data-news="btn-container"]');
const newsBtns = btnContainer.querySelectorAll('[data-name="news-btn"]');
const newsSlides = document.querySelectorAll('[data-news="slide"]');

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
};

export const initNewsBtns = () => {
  if (btnContainer && newsBtns) {
    btnContainer.addEventListener('click', onBtnContainerClick);
  }
};
