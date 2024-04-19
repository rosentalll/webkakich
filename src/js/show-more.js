
 const showMoreButtons = document.querySelectorAll('.show-more');
 const showMoreTextes = document.querySelectorAll('.show-more__text');
 const hiddenContent = document.querySelectorAll('.swiper-slide');

function reverseShowMoreSign(event) {
    if (event.target.closest('.brand') || event.target.closest('.tech')) {
        event.currentTarget.classList.toggle('show-more--reverse');  
    }
}

 function changeShowMoreText(event) {

  const checkButtonClasses = (text) => {
    return (event.target.closest('.brand') && text.classList.contains('brand')) ||
            (event.target.closest('.tech') && text.classList.contains('tech'));
    }

  showMoreTextes.forEach((text) => {
    if (event.target.closest('.show-more--reverse') && checkButtonClasses(text)) {
        text.textContent = "Скрыть";
    } else if (checkButtonClasses(text)) {
        text.textContent = "Показать всё";
    }
  });
  
}


function showContent (event) {
    hiddenContent.forEach((item) => {
        if (event.target.closest('.brand') && item.classList.contains('brand-hidden')) {   
            item.classList.toggle('brands__swiper-slide--hidden') 
        }
        if (event.target.closest('.tech') && item.classList.contains('tech-hidden')) {
            item.classList.toggle('technics__swiper-slide--hidden')
        }
    })
}

showMoreButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      reverseShowMoreSign(event)
      changeShowMoreText(event)
      showContent(event)
    })
  })