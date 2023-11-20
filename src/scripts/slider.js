import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.slider__container', {
  slidesPerView: 1,
  spaceBetween: 10,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.slider__button_right',
    prevEl: '.slider__button_left',
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
