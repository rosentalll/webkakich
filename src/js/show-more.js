
export const showMoreButtons = document.querySelectorAll('.show-more');
export const showMoreTextes = document.querySelectorAll('.show-more__text');
export const showMoreSigns = document.querySelectorAll('.show-more__sign');
export const hiddenContent = document.querySelectorAll('.swiper-slide');

export function reverseShowMoreSign(button) {
    showMoreSigns.forEach((sign) => {
        if (button.classList.contains('brand')) {
            if (sign.classList.contains('brand')) {
                sign.classList.toggle('show-more__sign--reverse')
                button.classList.toggle('showed');
            }
        } 
        if (button.classList.contains('tech')) {
            if (sign.classList.contains('tech')) {
                sign.classList.toggle('show-more__sign--reverse');
                button.classList.toggle('showed');
            }
        } 
    }) 
}

export function changeShowMoreText(button) {
    showMoreTextes.forEach((text) => {

        if (button.classList.contains('showed')) {
            
            if (button.classList.contains('brand') && text.classList.contains('brand')) {
                text.textContent = 'Скрыть';
                console.log('brand');
            } 

            if (button.classList.contains('tech') && text.classList.contains('tech')) {
                text.textContent = 'Скрыть';
                console.log('tech');
            } 

        } else {
            text.textContent = 'Показать всё';
        }
    })
}

export function showContent (button) {
    hiddenContent.forEach((item) => {
        if (button.classList.contains('brand')) {
            if (item.classList.contains('brand-hidden')) {
                item.classList.toggle('brands__swiper-slide--hidden')
            }
        }
        if (button.classList.contains('tech')) {
            if (item.classList.contains('tech-hidden')) {
                item.classList.toggle('technics__swiper-slide--hidden')
            }
        }
    })
}