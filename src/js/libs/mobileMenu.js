const burgerBtn = document.querySelector('#menu-burger')
const mobileMenu = document.querySelector('#mobile-menu')
const body = document.body

burgerBtn.addEventListener('click', () => {
   mobileMenu.classList.toggle('--open') //open mobile menu
   body.classList.toggle('--lock') //remove scrollbar
   burgerBtn.classList.toggle('--active') // change style burger-btn
})

console.log('Mobile menu has been connected...')
