import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';

function getSwiper(swiperName) {
    return new Swiper(swiperName, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    
      slidesPerView: 'auto',
      keyboard: true,
    
      breakpoints: {
        768: {
          initialSlide: 0,
          spaceBetween: 0,
          enabled: false
        }
      }
    })
  }
  
  getSwiper('.brands__swiper')
  getSwiper('.technics__swiper')
  getSwiper('.prices__swiper')
  
  new Swiper('.page-nav', {
    slidesPerView: 'auto',
    keyboard: true,
  
    breakpoints: {
      1440: {
        initialSlide: 0,
        spaceBetween: 0,
        enabled: false
      }
    }
  })