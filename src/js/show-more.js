
 const showMoreButtons = document.querySelectorAll('.show-more');
 const hiddenContent = document.querySelectorAll('.content-hidden');

 showMoreButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      reverseShowMoreSign(event)
      changeShowMoreText(event)
      showContent(event)
    })
  })

function reverseShowMoreSign(event) {
    event.currentTarget.classList.toggle('show-more--reverse')
}

 function changeShowMoreText(event) {
    const show = event.currentTarget.children[0]
    const hidden = event.currentTarget.children[1]

    show.classList.toggle('text--hidden')
    hidden.classList.toggle('text--hidden')
}


function showContent (event) {
    hiddenContent.forEach((item) => {
        if (event.target.closest('.brand') && item.classList.contains('brand-hidden')) {   
            item.classList.toggle('brands__swiper-slide--hidden') 
        }
        if (event.target.closest('.tech') && item.classList.contains('tech-hidden')) {
            item.classList.toggle('technics__swiper-slide--hidden')
        }
        if (event.target.closest('.text') && item.classList.contains('text-hidden')) {
            item.classList.toggle('about-us__text--hidden')
        }
    })
}