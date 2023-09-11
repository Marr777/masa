const modal = document.querySelector('[data-modal="about"]');
const input = modal.querySelector('input[data-focus]');
const modalBtn = document.querySelector('[data-open-modal="about"]');

const changeFocus = () => {
  if (!modal.classList.contains('is-active')) {
    setTimeout(() => {
      input.focus();
    }, 50);
  }
};

export const initFocus = () => {
  modalBtn.addEventListener('click', changeFocus);
};
