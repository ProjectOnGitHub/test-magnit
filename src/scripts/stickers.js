const toggleButton = document.querySelector('.toggle-button');
const toggleButtonText = toggleButton.querySelector('.toggle-button__text');
const stickersContainer = document.querySelector('.stickers');
const slider = document.querySelector('.slider');
function toggleStickersVisibility() {
  toggleButton.classList.toggle('toggle-button_active');
  stickersContainer.classList.toggle('stickers_show');
  if (toggleButton.classList.contains('toggle-button_active')) {
    toggleButtonText.textContent = 'Скрыть';
  } else {
    toggleButtonText.textContent = 'Посмотреть все стикерсы';
  }
}

function scrolltoSlider() {
  slider.scrollIntoView({
    behavior: 'smooth',
  });
}

toggleButton.addEventListener('click', toggleStickersVisibility);
stickersContainer.addEventListener('click', scrolltoSlider);
