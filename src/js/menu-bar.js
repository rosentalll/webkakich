const sideBarOpenIcons = document.querySelectorAll('.side-open');
const sideBarCloseIcons = document.querySelectorAll('.side-close');
const desktopCloseIcon = document.querySelector('.icon-close-desktop')

const menuBarContainer = document.querySelector('.menu-bar');
const menuBar = document.querySelector('.menu-bar__wrapper');
const callBar = document.querySelector('.call-bar');
const chatBar = document.querySelector('.chat-bar');

const body = document.querySelector('.body');
const bodyWrapper = document.querySelector('.body__wrapper');

sideBarOpenIcons.forEach((icon) => {
   icon.addEventListener('click', (event) => {
 
     event.stopPropagation()
 
     if (event.target.closest('.burger')) {
      moveMenuBar()
      switchOverlay()
     } 
 
     if (event.target.closest('.call') && menuBar.classList.contains('side-bar__wrapper--opened')) {
      moveRightBars(callBar)
      moveMenuBar()
     } else {
      if (event.target.closest('.call')) {
         moveRightBars(callBar)
         switchOverlay()
      }
     }
 
     if (event.target.closest('.chat') && menuBar.classList.contains('side-bar__wrapper--opened')) {
      moveRightBars(chatBar)
      moveMenuBar()
     } else {
      if (event.target.closest('.chat')) {
         moveRightBars(callBar)
         switchOverlay()
      }
     }
   })
 })
 
 sideBarCloseIcons.forEach((icon) => {
   icon.addEventListener('click', (event) => {
 
     if (event.target.closest('.burger')) moveMenuBar()
 
     if (event.target.closest('.call')) moveRightBars(callBar)
 
     if (event.target.closest('.chat')) moveRightBars(chatBar)
 
     switchOverlay()
 
   })
 })
 
 bodyWrapper.addEventListener('click', closeAll)
 
 desktopCloseIcon.addEventListener('click', closeAll)

function moveMenuBar() {
   menuBar.classList.toggle('side-bar__wrapper--opened');
}

function moveRightBars(sideBar) {
   sideBar.classList.toggle('side-bar__wrapper--opened');
   desktopCloseIcon.classList.toggle('icon-close-desktop--opened');
   menuBarContainer.classList.toggle('menu-bar--bleary');
}

function switchOverlay() {
   bodyWrapper.classList.toggle('body__wrapper--bleary');
   body.classList.toggle('body--open');
}

function closeAll() {
   menuBar.classList.remove('side-bar__wrapper--opened');
   callBar.classList.remove('side-bar__wrapper--opened');
   chatBar.classList.remove('side-bar__wrapper--opened');
   desktopCloseIcon.classList.remove('icon-close-desktop--opened');
   bodyWrapper.classList.remove('body__wrapper--bleary');
   body.classList.remove('body--open');
   menuBarContainer.classList.remove('menu-bar--bleary');
}


