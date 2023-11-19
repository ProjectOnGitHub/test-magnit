let maxStickersCount;

function showedStickers(count) {
  const stikers = document.querySelectorAll('.sticker');
  stikers.forEach((item, index) => {
    item.classList.remove('sticker_show');

    if (index < count) {
      item.classList.add('sticker_show');
    }
  });
}

const obj = {
  478: 4,
  600: 5,
  720: 6,
  900: 7,
  1200: 9,
};

function setStickersCountByWidth() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 478) {
    maxStickersCount = 6;
  }
  Object.keys(obj).forEach((key) => {
    if (windowWidth >= key) {
      maxStickersCount = obj[key];
    }
  });
  showedStickers(maxStickersCount);
}

window.addEventListener('resize', setStickersCountByWidth);

setStickersCountByWidth();
