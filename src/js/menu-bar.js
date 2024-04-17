export const sideBarOpenIcons = document.querySelectorAll('.side-open');
export const sideBarCloseIcons = document.querySelectorAll('.side-close');
export const desktopCloseIcon = document.querySelector('.icon-close-desktop')

const menuBarContainer = document.querySelector('.menu-bar');
export const menuBar = document.querySelector('.menu-bar__wrapper');
export const callBar = document.getElementById('call-bar');
export const applicationBar = document.getElementById('application-bar');

export const body = document.querySelector('.body');
export const bodyWrapper = document.querySelector('.body__wrapper');

export function openMenuBar() {
    menuBar.classList.add('side-bar__wrapper--opened');
}

export function closeMenuBar() {
    menuBar.classList.remove('side-bar__wrapper--opened');  
}

export function openRightBars(sideBar) {
    sideBar.classList.add('side-bar__wrapper--opened');
    desktopCloseIcon.classList.add('icon-close-desktop--opened');
    menuBarContainer.classList.add('menu-bar--bleary');
}

export function closeRightBars(sideBar) {
    sideBar.classList.remove('side-bar__wrapper--opened'); 
    desktopCloseIcon.classList.remove('icon-close-desktop--opened');
    menuBarContainer.classList.remove('menu-bar--bleary')
}

export function addOverlay() {
    bodyWrapper.classList.add('body__wrapper--bleary');
    body.classList.add('body--open');
}

export function removeOverlay() {
    bodyWrapper.classList.remove('body__wrapper--bleary');
    body.classList.remove('body--open'); 
}


