
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
    const defaultText = event.currentTarget.children[0]
    const changedText = event.currentTarget.children[1]

    defaultText.classList.toggle('text--hidden')
    changedText.classList.toggle('text--hidden')
}


function showContent (event) {

    const haveClasses = (targetClass, content, contentClass) => {
        return event.target.closest(targetClass) && content.classList.contains(contentClass)
    }

    hiddenContent.forEach((item) => {
        if (haveClasses('.brand', item, 'brand-hidden')) item.classList.toggle('brands__swiper-slide--hidden') 
        if (haveClasses('.tech', item, 'tech-hidden')) item.classList.toggle('technics__swiper-slide--hidden')
        if (haveClasses('.text', item, 'text-hidden')) item.classList.toggle('about-us__text--hidden')    
    })
}