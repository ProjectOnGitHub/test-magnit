const widthStickerMapping = {
  478: 4,
  600: 5,
  720: 6,
  900: 7,
  1200: 9,
};
let maxStickersCount;

const toggleButton = document.querySelector('.toggle-button');
const toggleButtonText = toggleButton.querySelector('.toggle-button__text');

function showedStickers(count) {
  const stikers = document.querySelectorAll('.sticker');
  stikers.forEach((item, index) => {
    item.classList.remove('sticker_show');
    if (index < count) {
      item.classList.add('sticker_show');
    }
  });
}

function setStickersCountByWidth() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 478) {
    maxStickersCount = 6;
  }
  Object.keys(widthStickerMapping).forEach((key) => {
    if (windowWidth >= key) {
      maxStickersCount = widthStickerMapping[key];
    }
  });
  showedStickers(maxStickersCount);
}

function toggleStickersVisibility() {
  toggleButton.classList.toggle('toggle-button_active');
  if (toggleButton.classList.contains('toggle-button_active')) {
    maxStickersCount = 24;
    toggleButtonText.textContent = 'Скрыть';
  } else {
    toggleButtonText.textContent = 'Посмотреть все стикерсы';
    setStickersCountByWidth();
  }
  showedStickers(maxStickersCount);
}

setStickersCountByWidth();
toggleButton.addEventListener('click', toggleStickersVisibility);
window.addEventListener('resize', setStickersCountByWidth);

console.log(maxStickersCount);
