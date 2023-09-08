const titles = document.querySelectorAll('[data-name="feature-title"]');
const breakpoint = window.matchMedia('(max-width: 767px)');

const breakpointChecker = () => {
  titles.forEach((title) => {
    const lineBreak = title.querySelector('br');
    if (breakpoint.matches) {
      lineBreak.style.display = 'none';
    } else {
      lineBreak.style.display = 'block';
    }
  });
};

export const initTitleBreak = () => {
  if (titles) {
    breakpointChecker();
    window.addEventListener('resize', breakpointChecker);
  }
};
