const images = document.querySelectorAll('[data-image]');

images.forEach((image) => {
   image.addEventListener('click', ({ target }) => {
      const mainImageContainer = document.querySelector('[data-mainImage]')
      image.firstElementChild.replaceWith(mainImageContainer.firstElementChild)
      mainImageContainer.appendChild(target)
   })
})