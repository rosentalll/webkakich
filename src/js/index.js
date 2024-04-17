import '../scss/style.scss'

import {
  
  showMoreButtons,
  reverseShowMoreSign,
  changeShowMoreText,
  showContent

} from './show-more.js'

import {

  sideBarOpenIcons,
  sideBarCloseIcons,
  desktopCloseIcon,

  menuBar,
  callBar,
  applicationBar,

  bodyWrapper,

  openMenuBar,
  closeMenuBar,

  openRightBars,
  closeRightBars,
  
  addOverlay,
  removeOverlay

} from './menu-bar.js'

showMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    reverseShowMoreSign(button)
    changeShowMoreText(button)
    showContent(button)
  })
})

sideBarOpenIcons.forEach((icon) => {
  icon.addEventListener('click', (event) => {

    event.stopPropagation()

    if (icon.classList.contains('burger')) {
      openMenuBar(menuBar);
    }

    if (icon.classList.contains('call')) {
      openRightBars(callBar)
    }

    if (icon.classList.contains('application')) {
      openRightBars(applicationBar)
    }

    addOverlay()

  })
})

sideBarCloseIcons.forEach((icon) => {
  icon.addEventListener('click', () => {

    if (icon.classList.contains('burger')) {
      closeMenuBar()
    }

    if (icon.classList.contains('call')) {
      closeRightBars(callBar)
    }

    if (icon.classList.contains('application')) {
      closeRightBars(applicationBar)
    }

    removeOverlay()

  })
})

bodyWrapper.addEventListener('click', () => {
  closeMenuBar()
  closeRightBars(applicationBar)
  closeRightBars(callBar)
  removeOverlay()
})

desktopCloseIcon.addEventListener('click', () => {
  closeRightBars(applicationBar)
  closeRightBars(callBar)
  removeOverlay()
})

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