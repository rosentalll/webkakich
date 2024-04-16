export const sideBarOpenIcons = document.querySelectorAll('.side-open');
export const sideBarCloseIcons = document.querySelectorAll('.side-close');
export const ghostIcon = document.querySelector('.icon-close-desktop')

const menuBarContainer = document.querySelector('.menu-bar');
export const menuBar = document.querySelector('.menu-bar__wrapper');
export const callBar = document.getElementById('call-bar');
export const applicationBar = document.getElementById('application-bar');

export const body = document.querySelector('.body');
export const bodyWrapper = document.querySelector('.body__wrapper');

export function openSideBar(icon) {
    if (icon.classList.contains('burger')) {
        menuBar.classList.add('side-bar__wrapper--opened');
        bodyWrapper.classList.add('body__wrapper--bleary');
        body.classList.add('body--open');
    }

    if (icon.classList.contains('call')) {
        callBar.classList.add('side-bar__wrapper--opened');
        ghostIcon.classList.add('icon-close-desktop--opened');
        bodyWrapper.classList.add('body__wrapper--bleary');
        body.classList.add('body--open');
        menuBarContainer.classList.add('menu-bar--bleary')
    }

    if (icon.classList.contains('application')) {
        applicationBar.classList.add('side-bar__wrapper--opened');
        ghostIcon.classList.add('icon-close-desktop--opened');
        bodyWrapper.classList.add('body__wrapper--bleary');
        body.classList.add('body--open');
        menuBarContainer.classList.add('menu-bar--bleary')
    }
}

export function closeMenuBar() {
    menuBar.classList.remove('side-bar__wrapper--opened');
    bodyWrapper.classList.remove('body__wrapper--bleary');
    body.classList.remove('body--open');  
}

export function closeCallBar() {
    callBar.classList.remove('side-bar__wrapper--opened');
    bodyWrapper.classList.remove('body__wrapper--bleary');
    ghostIcon.classList.remove('icon-close-desktop--opened');
    body.classList.remove('body--open');  
    menuBarContainer.classList.remove('menu-bar--bleary')
}

export function closeApplicationBar() {
    applicationBar.classList.remove('side-bar__wrapper--opened');
    bodyWrapper.classList.remove('body__wrapper--bleary');
    ghostIcon.classList.remove('icon-close-desktop--opened');
    body.classList.remove('body--open');  
    menuBarContainer.classList.remove('menu-bar--bleary')
}