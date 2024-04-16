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
  ghostIcon,
  bodyWrapper,
  openSideBar,
  closeMenuBar,
  closeCallBar,
  closeApplicationBar
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
    openSideBar(icon)
  })
})

sideBarCloseIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('burger')) closeMenuBar()
    if (icon.classList.contains('call')) closeCallBar()
    if (icon.classList.contains('application')) closeApplicationBar()
  })
})

bodyWrapper.addEventListener('click', () => {
  closeMenuBar()
  closeCallBar()
  closeApplicationBar()
})

ghostIcon.addEventListener('click', () => {
  closeCallBar()
  closeApplicationBar()
})

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

new Swiper('.brands__swiper', {
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

new Swiper('.technics__swiper', {
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

new Swiper('.prices__swiper', {
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
