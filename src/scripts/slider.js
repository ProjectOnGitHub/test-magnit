import Swiper from 'swiper/bundle';

const thumbsSwiper = new Swiper('.thumbs-swiper', {
  slidesPerView: 'auto',
  virtualTranslate: true,
  allowTouchMove: false,
  wrapperClass: 'stickers',
  slideClass: 'sticker',
  slideVisibleClass: 'sticker_visible',
  slideActiveClass: 'sticker_active',
  slideThumbActiveClass: 'sticker_thumb-active',
  slidePrevClass: 'sticker_prev',
  slideNextClass: 'sticker_next',
});

const swiper = new Swiper('.slider__container', {
  virtualTranslate: true,
  speed: null,
  wrapperClass: 'slides',
  slideClass: 'slide',
  slideVisibleClass: 'slide_visible',
  slideActiveClass: 'slide_active',
  slidePrevClass: 'slide_prev',
  slideNextClass: 'slide_next',

  navigation: {
    nextEl: '.slider__button_right',
    prevEl: '.slider__button_left',
  },

  thumbs: {
    swiper: thumbsSwiper,
  },
});

function setCurrentText() {
  const texts = document.querySelectorAll('.info__item');
  const { activeIndex } = swiper;
  texts.forEach((item, index) => {
    item.classList.remove('info__item_active');
    if (index >= 0 && index === activeIndex) {
      item.classList.add('info__item_active');
    }
  });
}

swiper.on('slideChange', setCurrentText);
